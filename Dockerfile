# Oбраз создаётся на основе alpine linux с установленной openjdk16
FROM openjdk:16-jdk-alpine
#Переменной JAR_FILE присваивается путь к jar- архиву
ARG JAR_FILE=target/uksdrongo-0.0.1-SNAPSHOT.jar
#Назначаем рабочую директорию, в которой будут выполняться дальнейшие команды (перемещаемся в папку app)
WORKDIR /opt/app
#Наш jar-файл, указанный в JAR_FILE, копируется в папку app, и копии задаётся имя app.jar
COPY ${JAR_FILE} app.jar
#jar-файл запускается, собирается команда java -jar app.jar из заданной рабочей директории
ENTRYPOINT ["java","-jar","app.jar"]