from RealEstateZoneClassifier import RealEstateZoneClassifier


# Crear clasificador
classifier = RealEstateZoneClassifier()

# Analizar todas las zonas
result = classifier.analyze_zones()

print(result.head())
