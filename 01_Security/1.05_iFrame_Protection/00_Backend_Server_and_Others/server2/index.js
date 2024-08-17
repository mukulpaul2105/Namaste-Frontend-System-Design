const express = require("express");

const PORT = 3011;
const app = express();

app.use(express.static('public'));

app.get("/iframe-website1", (req, res) => {
    res.sendFile(__dirname + '/public/iframe-clickjacking.html');
})

app.get("/iframe-website2", (req, res) => {
    res.sendFile(__dirname + '/public/iframe-data-theft-via-js.html');
})

app.listen(PORT, () => {
    console.log("called")
})