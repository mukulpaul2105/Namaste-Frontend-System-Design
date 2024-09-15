const express = require("express");
const path = require("path");

const PORT = 3010;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("called")
})