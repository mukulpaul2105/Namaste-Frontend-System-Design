const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3010;
const app = express();

app.use(bodyParser.json())

app.post("/webhook", (req, res) => {
    // Extract the payload from the incoming POST request
    const payload = req.body;

    // Log the recieved payload (we might want to process it in a more measure)
    console.log("Received webhook payload: ", payload)

    // Optionally, send a response to the sender to acknowledge receipt
    res.status(200).send("Webhook received success")
})

app.listen(PORT, () => {
    console.log("called")
});