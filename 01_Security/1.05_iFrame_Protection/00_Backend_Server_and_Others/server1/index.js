const express = require("express");

const PORT = 3010;
const app = express();

app.use(express.static('public'));

app.get("/example1", (req, res) => {
    res.sendFile(__dirname + '/public/clickjacking.html');
})

app.get("/example2", (req, res) => {
    res.sendFile(__dirname + '/public/data-theft-via-js.html');
})

app.get("/example3", (req, res) => {
    res.sendFile(__dirname + '/public/restrict-load-website-in-iframe.html');
})


app.listen(PORT, () => {
    console.log("called")
})