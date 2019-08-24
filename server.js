var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {customerName: "Colin",
    phoneNumber: "555-1234",
    customerEmail: "colin@hello.com",
    customerID: "colin3"},
    {customerName: "Brian",
    phoneNumber: "123-4567",
    customerEmail: "brian@hello.com",
    customerID: "brian2"},
    {customerName: "Phillip",
    phoneNumber: "987-6543",
    customerEmail: "phillip@hello.com",
    customerID: "phillip1"}
];

var waitList = [
    {customerName: "Ryan",
    phoneNumber: "834-5291",
    customerEmail: "ryan@hello.com",
    customerID: "ryan1"},

    {customerName: "Seth",
    phoneNumber: "482-5012",
    customerEmail: "seth@hello.com",
    customerID: "seth2"},

    {customerName: "Eli",
    phoneNumber: "582-4015",
    customerEmail: "eli@hello.com",
    customerID: "eli3"},
    
];

// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.delete("/api/tables", function (req, res) {
    tables = [];
    res.json(tables);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    if (tables.length < 5) {
        tables.push(newReservation);
        res.send(true);
    }
    else {
        waitList.push(newReservation)
        res.send(false);
    };
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});