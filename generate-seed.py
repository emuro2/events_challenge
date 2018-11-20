# Generate seeds file for mongodb.
import json

input_file = open('test_data/sampleTickets.csv', 'r')


# Generate Tickets seed file.
tickets_file = open('database/tickets-seeds.json', 'w')
ticket_lines = input_file.readlines()[1:]
tickets = []
for ticket in ticket_lines:
    ticket_split = ticket.split(",")
    eventId = ticket_split[0]
    section = int(ticket_split[1])
    quantity = int(ticket_split[2])
    price = float(ticket_split[3])
    row = ticket_split[4].strip()

    ticket = {
      "eventId": eventId,
      "section": section,
      "quantity": quantity,
      "price": price,
      "row": row
    }
    tickets.append(ticket)

ticket_json = json.dumps(tickets[:10])
tickets_file.write(ticket_json)


# Generate Events seed file.
events_file = open('database/events-seeds.json', 'w')
events = [{
    "id": "107",
    "name": "event 1",
    "date": "2018-11-19",
    "location": "Chicago",
    "sellerId": "1"
},{
    "id": "162",
    "name": "event 2",
    "date": "2018-12-01",
    "location": "Chicago",
    "sellerId": "1"
},{
    "id": "164",
    "name": "event 3",
    "date": "2018-11-20",
    "location": "Chicago",
    "sellerId": "1"
}]

event_json = json.dumps(events)
events_file.write(event_json)



# Generate Customers seed file.
customers_file = open('database/customers-seeds.json', 'w')
customers = [{
    "id": "1",
    "name": "John Doe",
    "ticketIds": [],
    "userReferral": "www.google.com",
    "address": "123 W Street St. 12345"
}]

customer_json = json.dumps(customers)
customers_file.write(customer_json)




# Generate Sellers seed file.
sellers_file = open('database/sellers-seeds.json', 'w')

sellers = [{
    "id": "1",
    "name": "Tim Doe"
}]

seller_json = json.dumps(sellers)
sellers_file.write(seller_json)
