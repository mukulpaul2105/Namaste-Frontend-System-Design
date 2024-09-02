const express = require("express");

const PORT = 3010;
const app = express();

app.use(express.static('public'));

let data = "Initial Data";

const waitingClients = []

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/getData', (req, res) => {
    res.send("hello")
});

app.listen(PORT, () => {
    console.log("called")
});