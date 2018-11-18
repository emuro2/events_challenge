#API Documentation and Setup

```
npm install
npm start
```


# Docker Installation and Setup

```
docker build . -t events_api
docker run -p 3000:3000 events_api
```

Open up Postman or run curl commands to interact with the api.
http://{ip_addr_of_docker}:3000/

Returns:
```
Hello World!
```
