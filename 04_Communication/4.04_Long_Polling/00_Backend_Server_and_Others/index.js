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
    if (data !== req.query.lastData) {
        res.send({ data })
    } else {
        waitingClients.push(res)
    }
});

app.get('/updateData', (req, res) => {
    data = req.query.data
    while(waitingClients.length > 0) {
        const cliend = waitingClients.pop()
        cliend.json({data})
    }
    res.send({data: "Updated"})
});



app.listen(PORT, () => {
    console.log("called")
});