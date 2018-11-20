const express = require('express');
const app = new express();
const bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://events_mongodb:27017/';

var db

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)
    db = database.db("events_challenge_db")
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

// Home
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Get all events
app.get('/events', (req, res) => {
    db.collection('events-seeds.json').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})

// Get all Tickets
app.get('/tickets', (req, res) => {
    db.collection('tickets-seeds.json').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})

// Get available tickets for an event
app.get('/tickets/:eventid', (req, res) => {
    var eventId = req.params.eventid

    db.collection('tickets-seeds.json').find({"eventId": eventId}).toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})

// Get best tickets for an event based on cheapest price
app.get('/tickets/:eventid/best', (req, res) => {
    var eventId = req.params.eventid

    db.collection('tickets-seeds.json').find({"eventId": eventId}).sort( { "price": 1 } ).limit(1).toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})

// Get all sellers
app.get('/sellers', (req, res) => {
    db.collection('sellers-seeds.json').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})


// Get all customers
app.get('/customers', (req, res) => {
    db.collection('customers-seeds.json').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result);
    })
})
