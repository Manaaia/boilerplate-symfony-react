## Boilerplate for dockerized client-server application

**This boilerplate is for development purposes only. It is not recommended to use it in production.**

The purpose of this boilerplate is to provide a starting point for developing a client-server application with Docker, ReactJs, and Symfony. The boilerplate includes a basic setup for the client and server, as well as a Taskfile for running common tasks.

Please feel free to use this for your projects. You can simply clone the repository, update the .env file, and start developing your application.

### Requirements
To run this boilerplate, you only need to have the following installed on your machine:
- Docker
- Docker Compose
- Task

### Getting started
1. Clone the repository
2. Update the .env file with your desired values
3. Run `task install` to install the application
4. Run `task start` to start the application
5. Open `http://localhost` in your browser

### Available urls
- Client: `http://localhost`
- Server: `http://api.localhost`

### Technologies
- ReactJs: Client side
- Typescript: Better JS
- Vite: Build tool for ReactJs
- Symfony: Server side (PHP)
- Nginx: To serve Symfony
- Docker: Containerization
- Traefik: Reverse proxy for routing
- MySQL: Database
- Taskfile: Task runner
- PhpStan: Static analysis tool for PHP (setup at max level)
- PhpCsFixer: PHP coding standards fixer
- ESLint: Linter for JS
- Vitest: Testing framework for Vite
- Dependabot: Automated dependency updates (you'll need to enable it in your repository)

### Next steps
- Improve Dockerfile for security
- Add production environment
- Introduction of Github Actions for CI/CD
- Add test frameworks
