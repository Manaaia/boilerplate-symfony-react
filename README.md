## Boilerplate for dockerized client-server application

>[!WARNING]
>This boilerplate is for development purposes only. It is not recommended to use it in production.

The purpose of this boilerplate is to provide a starting point for developing a client-server application with Docker, ReactJs, and Symfony. The boilerplate includes a basic setup for the client and server, as well as a Taskfile for running common tasks.

Please feel free to use this for your projects. You can simply clone the repository, update the .env file, and start developing your application.

### Requirements
To run this boilerplate, you only need to have the following installed on your machine:
- Docker
- Docker Compose
- Task

### Getting started
1. Clone the repository
2. Run `task install` to install the application
3. Run `task start` to start the application
4. Open `http://localhost` in your browser

### Available urls
- Client: `http://localhost`
- Server: `http://api.localhost`

### How to use the linters, static analysis, and tests
- API: see [API documentation](docs/api-get-started.md)
- Client: see [Client documentation](docs/web-get-started.md)

### Technologies
#### Client
- ReactJs: Client side
- Typescript: Better JS
- Vite: Build tool for ReactJs
- ESLint: Linter for JS
- Vitest: Testing framework for Vite

#### Server
- Symfony: Server side (PHP)
- Nginx: To serve Symfony
- PhpStan: Static analysis tool for PHP (setup at max level)
- PhpCsFixer: PHP coding standards fixer
- Pest: Testing framework for PHP
- MySQL: Database

#### Infrastructure
- Docker: Containerization
- Traefik: Reverse proxy for routing

#### Extras tools to make your life easier
- Taskfile: Task runner
- Dependabot: Automated dependency updates (you'll need to enable it in your repository)

### Next steps
- Improve Dockerfile for security
- Add production environment
