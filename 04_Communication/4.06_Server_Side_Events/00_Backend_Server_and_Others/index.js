const express = require("express");

const PORT = 3010;
const app = express();

app.use(express.static('public'));

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write('data: Welcome to Server sent event \n\n');


    const intervalId = setInterval(() => {
        res.write(`data: Server Time ${new Date().toLocaleString()} \n\n`);
    }, 2000);

    req.on('close', () => {
        clearInterval(intervalId);
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, () => {
    console.log("called")
});