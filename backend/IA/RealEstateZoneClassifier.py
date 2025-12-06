import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import warnings

warnings.filterwarnings("ignore")


class RealEstateZoneClassifier:

    def __init__(self):
        self.scaler = StandardScaler()

    def calculate_features(self, df):
        df = df.copy()

        growth_cols_recent = ["Growth_2023", "Growth_2024", "Growth_2025"]
        df["Avg_Growth_Recent"] = df[growth_cols_recent].mean(axis=1)

        growth_cols_historic = [
            "Growth_2013",
            "Growth_2014",
            "Growth_2015",
            "Growth_2016",
            "Growth_2017",
        ]
        df["Avg_Growth_Historic"] = df[growth_cols_historic].mean(axis=1)

        df["Growth_Acceleration"] = df["Avg_Growth_Recent"] - df["Avg_Growth_Historic"]

        affordability_cols = [
            "Affordability_Ratio_2021",
            "Affordability_Ratio_2022",
            "Affordability_Ratio_2023",
        ]
        df["Avg_Affordability"] = df[affordability_cols].mean(axis=1)

        vacancy_cols = ["Vacancy_Rate_2021", "Vacancy_Rate_2022", "Vacancy_Rate_2023"]
        df["Avg_Vacancy"] = df[vacancy_cols].mean(axis=1)

        df["Current_Price"] = df["2025-01-31"]

        all_growth_cols = [col for col in df.columns if col.startswith("Growth_")]
        df["Growth_Volatility"] = df[all_growth_cols].std(axis=1)

        df["Momentum_Score"] = (df["Avg_Growth_Recent"] - df["Avg_Growth_Historic"]) / (
            df["Growth_Volatility"] + 0.001
        )

        return df

    def classify_zone(self, row):

        # Criterios
        affordable = row["Avg_Affordability"] < 5.0
        expensive = row["Avg_Affordability"] > 6.5

        low_vacancy = row["Avg_Vacancy"] < 0.08
        moderate_vacancy = 0.08 <= row["Avg_Vacancy"] <= 0.10
        high_vacancy = row["Avg_Vacancy"] > 0.10

        positive_growth = row["Avg_Growth_Recent"] > 0.03
        moderate_growth = 0.0 <= row["Avg_Growth_Recent"] <= 0.03
        negative_growth = row["Avg_Growth_Recent"] < 0.0

        accelerating = row["Growth_Acceleration"] > 0.01
        strong_momentum = row["Momentum_Score"] > 0.5

        # Clasificación
        # BARATAS Y VAN A SUBIR
        if (affordable and positive_growth and low_vacancy and accelerating) or (
            affordable and strong_momentum and low_vacancy
        ):
            return "Barata - Alto Potencial"

        # CARAS Y SOBREVALORADAS
        elif (expensive and (negative_growth or high_vacancy)) or (
            expensive and moderate_growth and moderate_vacancy
        ):
            return "Cara - Sobrevalorada"

        # REGULARES
        else:
            return "Regular - Estable"

    def calculate_confidence(self, row):
        confidence = 50  # Base

        # Ajustes según señales claras
        if abs(row["Growth_Acceleration"]) > 0.02:
            confidence += 15

        if row["Avg_Vacancy"] < 0.06 or row["Avg_Vacancy"] > 0.12:
            confidence += 10

        if abs(row["Momentum_Score"]) > 1.0:
            confidence += 15

        if row["Growth_Volatility"] < 0.05:
            confidence += 10

        return min(confidence, 100)

    def get_investment_recommendation(self, classification):
        recommendations = {
            "Barata - Alto Potencial": "COMPRAR - Oportunidad de inversión",
            "Cara - Sobrevalorada": "EVITAR - Alto riesgo de corrección",
            "Regular - Estable": "MANTENER - Inversión conservadora",
        }
        return recommendations.get(classification, "Sin recomendación")

    def analyze_zones(self):
        df = pd.read_csv("texas_master_data.csv")

        # Calcular características
        df_analyzed = self.calculate_features(df)

        # Clasificar cada zona
        df_analyzed["Clasificacion"] = df_analyzed.apply(self.classify_zone, axis=1)

        # Calcular confianza
        df_analyzed["Nivel_Confianza"] = df_analyzed.apply(
            self.calculate_confidence, axis=1
        )

        # Recomendación
        df_analyzed["Recomendacion"] = df_analyzed["Clasificacion"].apply(
            self.get_investment_recommendation
        )

        # Seleccionar y renombrar columnas finales
        result = df_analyzed[
            [
                "RegionName",
                "City",
                "CountyName",
                "State",
                "Clasificacion",
                "Current_Price",
                "Avg_Growth_Recent",
                "Avg_Affordability",
                "Avg_Vacancy",
                "Growth_Acceleration",
                "Momentum_Score",
                "Nivel_Confianza",
                "Recomendacion",
            ]
        ].copy()

        # Renombrar para mejor legibilidad
        result.columns = [
            "RegionName",
            "City",
            "CountyName",
            "State",
            "Clasificacion",
            "Precio_Actual",
            "Crecimiento_Reciente_Pct",
            "Ratio_Asequibilidad",
            "Tasa_Vacancia_Pct",
            "Aceleracion_Crecimiento",
            "Score_Momentum",
            "Nivel_Confianza",
            "Recomendacion",
        ]

        # Convertir porcentajes
        result["Crecimiento_Reciente_Pct"] = (
            result["Crecimiento_Reciente_Pct"] * 100
        ).round(2)
        result["Tasa_Vacancia_Pct"] = (result["Tasa_Vacancia_Pct"] * 100).round(2)
        result["Aceleracion_Crecimiento"] = (
            result["Aceleracion_Crecimiento"] * 100
        ).round(2)

        # Redondear valores
        result["Precio_Actual"] = result["Precio_Actual"].round(2)
        result["Ratio_Asequibilidad"] = result["Ratio_Asequibilidad"].round(2)
        result["Score_Momentum"] = result["Score_Momentum"].round(2)

        return result
