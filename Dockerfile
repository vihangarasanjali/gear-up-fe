# Stage 1: Build locally, then copy to container
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the pre-built JAR file
COPY target/*.jar app.jar

# Expose the port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]