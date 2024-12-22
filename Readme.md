## Building and Running the Docker Container

After creating the Dockerfile, you can build the Docker image with the following command:
```sh
docker build -t my-node-app .
```

To run the Docker container, use the following command:
```sh
docker run -p 4000:4000 my-node-app
```

## Using docker-compose or compose

If you have a `docker-compose.yml or compose.yml` file, you can build and run the Docker container using a single command:
```sh
docker compose up --build
```
This approach is easier as it builds and runs the container in one step.

To stop and remove the Docker containers, networks, and volumes defined in the `docker-compose.yml` file, use:
```sh
docker compose down
```
