## Boilerplate for dockerized client-server application

**This is a work in progress. It is a good base to start developing right away but should not be used as so in production.**

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
- Traefik: Reverse proxy

### Requirements
- Docker
- Docker Compose
- Task

### Installation
1. Clone the repository
2. Run `task install` to install the application
3. Run `task start` to start the application
4. Open `http://localhost` in your browser

### Available urls
- Client: `http://localhost`
- Server: `http://api.localhost`

### Next steps
- Improve Dockerfile for security
- Add production environment
- Introduction of Github Actions for CI/CD
- Add static analysis tools
- Add linters
- Add test frameworks
