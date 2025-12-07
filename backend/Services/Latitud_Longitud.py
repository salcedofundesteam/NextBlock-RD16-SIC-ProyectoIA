import pandas as pd
import pgeocode

def agregar_lat_long(input_csv_path="resultados_prediccion.csv",
                     output_csv_path="resultados_prediccion_con_geo.csv"):
    
    # Cargar dataset original
    df = pd.read_csv(input_csv_path)

    # Inicializar buscador para códigos ZIP de EE. UU.
    nomi = pgeocode.Nominatim("us")

    # Funciones para obtener lat y long desde ZIP
    def obtener_lat(zip_code):
        try:
            info = nomi.query_postal_code(str(zip_code))
            return info.latitude
        except:
            return None

    def obtener_lon(zip_code):
        try:
            info = nomi.query_postal_code(str(zip_code))
            return info.longitude
        except:
            return None

    # Agregar columnas nuevas
    df["Latitude"] = df["RegionName"].apply(obtener_lat)
    df["Longitude"] = df["RegionName"].apply(obtener_lon)

    # Guardar archivo transformado
    df.to_csv(output_csv_path, index=False)

    print(f"Archivo generado correctamente: {output_csv_path}")


if __name__ == "__main__":
    agregar_lat_long()

