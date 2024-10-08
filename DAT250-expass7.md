## DAT250: Software Technology Experiment Assignment 7

Part 1:

Following the steps in the assignment description. 
Screenshot of running and inspecting logs:

<img width="762" alt="postgresRun" src="https://github.com/user-attachments/assets/982fc80a-ee0b-461e-8c37-0d5f4f1323b7">


After making adjustments according to the assignment description to the jpa_client.
Adjusting persistance.xml with the required postgre connection properties.
Ran the schema.up.sql file as SQL script in DBeaver client on the running postgre database.
Made a few improvements to the jpa_client that were not resolved entirely before.
The screenshot shows the tables in DBeaver after running the persistance.

<img width="469" alt="postgresTables" src="https://github.com/user-attachments/assets/c7211d5b-7e0e-4571-b7c7-582bb0000d64">


Part 2:

Pulled the gradle and temurin image and created the following dockerfile in the expass3 project folder:
```dockerfile
FROM gradle:7.6-jdk17 AS build
WORKDIR /app
COPY gradlew gradlew
COPY gradle gradle
COPY build.gradle.kts build.gradle.kts
COPY settings.gradle.kts settings.gradle.kts
COPY src src
RUN gradle build --no-daemon -x test

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

After building the application successfully runs:

<img width="822" alt="dockerized_application" src="https://github.com/user-attachments/assets/31bc0b37-7c6a-485d-b7c0-6d61571f1b8b">




