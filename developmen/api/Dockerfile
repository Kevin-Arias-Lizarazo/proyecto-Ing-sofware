# IMAGEN MODELO
FROM eclipse-temurin:24.0.1_9-jdk

# PORT

EXPOSE 3210

# Raiz del Contenedor
WORKDIR /root

# MOVER ARCHIVOS Al CONTENEDOR
COPY ./pom.xml /root
COPY ./.mvn /root/.mvn
COPY ./mvnw /root

# DESCARGAR DEPENDENCIAS
RUN ./mvnw dependency:go-offline

# CARGAR EL CODIGO Al CONTENEDOR
COPY ./src /root/src

# CONSTRUIR EL CONTENEDOR
RUN ./mvnw clean install -DskipTests
# CONSTRUIR EL CONTENEDOR SALTANDOSE TEST
# RUN ./mvnw clean install -DskipTests=true

# LEVANTAR LA APLICACION CUANDO EL CONTENEDOR INICIE
ENTRYPOINT ["java","-jar","/root/target/developmen-0.0.1-SNAPSHOT.jar"]
