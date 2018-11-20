FROM mongo
COPY tickets-seeds.json /tickets-seeds.json

COPY events-seeds.json /events-seeds.json

COPY sellers-seeds.json /sellers-seeds.json

COPY customers-seeds.json /customers-seeds.json


CMD ls -1 *.json | while read jsonfile; do mongoimport --host events_mongodb --port 27017 --db events_challenge_db --collection $jsonfile --mode upsert --type json --file /$jsonfile --jsonArray --drop; done
