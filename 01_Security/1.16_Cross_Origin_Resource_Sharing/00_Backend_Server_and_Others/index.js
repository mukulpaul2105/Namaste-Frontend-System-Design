const express = require("express");

const PORT = 3010;
const app = express();
const cors = require("cors");

const allowedOrigin = ['http://127.0.0.1:5500'];

const corsOptions = {
    origin: function(origin, callback) {
        console.log(origin)
        if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
            console.log("within true")
            callback(null, true);
        } else {
            callback(new Error('CORS error'));
        }
    }
}

app.use(cors(corsOptions));

app.get('/list', (req, res) => {
    res.send([{
        id: 1,
        title: "Namaste React"
    },{
        id: 2, 
        title: "Namaste Frontend System Design"
    }])
})

app.listen(PORT, () => {
    console.log("called")
})