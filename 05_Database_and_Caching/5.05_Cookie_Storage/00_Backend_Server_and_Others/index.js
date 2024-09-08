const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = 3010;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/set-preferences', (req, res) => {
    const preferences = req.body.preferences;
    res.cookie('userPreferences', preferences, { maxAge: 30 * 60 * 1000 });
    res.redirect('/')
})

app.get("/logout", (req, res) => {
    res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"');
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log("called")
})