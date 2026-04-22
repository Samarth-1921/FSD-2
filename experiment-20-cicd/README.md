# Experiment-20: CI/CD Pipeline

// Aim
To implement a CI/CD pipeline using Docker and GitHub Actions.

// Tools Used
- Flask (Python)
- Pytest
- Docker
- GitHub Actions

// Procedure
1. Used Experiment-16 backend project.
2. Created Dockerfile to containerize the application.
3. Built Docker image and ran container.
4. Created GitHub Actions workflow.
5. Automated testing and deployment.

// Commands Used
docker build -t testing-backend .
docker run -d -p 5005:5000 testing-backend
docker ps

//  Output
- Backend running successfully in Docker
- CI/CD pipeline executed successfully
- Tests passed using pytest

// Conclusion
Successfully implemented CI/CD pipeline and deployed the application using Docker and GitHub Actions.