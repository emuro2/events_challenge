# events_challenge
Vivid Seats Challenge


# Data Model
Collections: Events, Customers, Tickets, Sellers

##Events
id, name, date, location, sellerId
##Customers
id, name, ticketIds, userReferral, address
##Tickets
id, eventId, section, quantity, price, row
## Sellers
id, name


#NodeJS API Documentation
[here](https://github.com/emuro2/events_challenge/blob/master/api/README.md)


# Running docker environment:

## Generate seed files for MongoDB.
```
python generate-seed.py
```

## Run seed process and serve the api.
```
docker pull mongo
docker run --name events_mongodb -d mongo
docker pull node:8.12.0-alpine
docker-compose up --build --force-recreate
```


# helpful to clean up docker environment.
docker rmi $(docker images -a -q) -f
docker system prune -a
