## Manual installation
-install node.js
-clone repo
-install dependencies(npm install)
-start DB locally
    -docker run -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres
    -Go to neon.tech and get a postgres database url.

-Change the .env as your password
-Run following commands:
    -npx prisma migrate
    -npx prisma generate
    -npm run build
    -npm run start


## Docker installation

-Install docker
-Start postgres
    -docker run -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres
-Build the image -`docker build -t user_project .`
-Run the image - `docker run -p 3000:3000  user_project`


## Docker Compose installation

-Install docker, docker-compose
-Run `docker-compose up`