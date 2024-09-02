const express = require("express");

const PORT = 3010;
const app = express();

app.use(express.static('public'));

let data = "Initial Data";

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/getData', (req, res) => {
    res.send({
        data
    });
});

app.get('/updateData', (req, res) => {
    data="Updated Data";
    res.send({
        data
    })
})

app.listen(PORT, () => {
    console.log("called")
});