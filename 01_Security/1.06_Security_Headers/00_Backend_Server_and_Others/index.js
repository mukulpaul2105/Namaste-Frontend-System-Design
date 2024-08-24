const express = require("express");

const PORT = 3010;
const app = express();

// Custom redirection code
const redirectToHttps = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        // Redirect to HTTPS
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next()
}

// app.use(redirectToHttps)

app.use((req, res, next) => {
    res.setHeader('Referrel-Policy', 'orgin')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.removeHeader('X-Powered-By')
    res.setHeader('Strict-Transport-Security', 'max-age=32536000; includeSubDomains; preload')
    next()
});

app.use(express.static('public'));

app.get("/list", (req, res) => {
    res.send([{
        id: 1,
        title: "Namaste Frontend System Design"
    }]);
});

app.listen(PORT, () => {
    console.log("called")
});