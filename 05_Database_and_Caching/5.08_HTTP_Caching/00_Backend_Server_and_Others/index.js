const express = require("express");
const path = require("path");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    // res.setHeader('Expires', 'Mon, 09 Sep 2024 17:44:39 GMT')
    next();
})

app.use(express.static(path.join(__dirname, 'public'), {
    etag: true,
    cacheControl: false,
    lastModified: false,
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => {
    console.log("called")
})