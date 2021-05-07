# Oбраз создаётся на основе alpine linux с установленной openjdk16
FROM openjdk:16-jdk-alpine
EXPOSE 8080
#Переменной JAR_FILE присваивается путь к jar- архиву
ARG JAR_FILE=target/my-application.jar
ADD ${JAR_FILE} app.jar
#jar-файл запускается, собирается команда java -jar app.jar из заданной рабочей директории
ENTRYPOINT ["java","-jar","/app.jar"]