## Boilerplate for dockerized client-server application

**This is a work in progress. It is intended for development purposes only.**

The purpose of this boilerplate is to provide a starting point for developing a client-server application with Docker, ReactJs, and Symfony. The boilerplate includes a basic setup for the client and server, as well as a Taskfile for running common tasks.

Please feel free to use this boilerplate for your projects. You can simply clone the repository, update the .env file, and start developing your application.

### Technologies
- ReactJs: Client side
- Typescript: Better JS
- Symfony: Server side (PHP)
- Docker: Containerization
- Nginx: Web server
- MySQL: Database
- Taskfile: Task runner

### Requirements
- Docker
- Task

### Installation
1. Clone the repository
2. Run `task install` to install the application
3. Run `task start` to start the application
4. Open `http://localhost:3000` in your browser

### Available urls
- Client: `http://localhost:3000`
- Server: `http://localhost`

### Next steps
- Improvement on the way the client and server are served (client and server urls must be logical)
- Improve Dockerfile for security
- Linking the client and server
- Introduction of Traefik for routing
- Introduction of Dependabot for dependency updates
- Introduction of Github Actions for CI/CD
