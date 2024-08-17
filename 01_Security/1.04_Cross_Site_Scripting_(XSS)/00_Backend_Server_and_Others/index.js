const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self' 'unsafe-inline' 'nonce-randomKey' http://unsecure.com"
    )
    next()
})

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => {
    console.log("called")
})