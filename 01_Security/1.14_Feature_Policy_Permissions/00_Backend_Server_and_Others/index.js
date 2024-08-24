const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=()');
    next()
})

app.get('/page', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feature Policy Permissions</title>
</head>
<body>
    <h1>Fetch Geolocation Permission Example</h1>
    <button onclick="getGeolocation()">Fetch Data</button>
    <div id="result"></div>

    <script>
        function getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log("Latitude: ", latitude)
                    console.log("Longitude: ", longitude);
                },
                function(error) {
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            console.error('User denied the request for Geolocation');
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error('Location information is unavailable');
                            break;
                        case error.TIMEOUT:
                            console.error("The request to get the user location time out.");
                            break;
                        default:
                            console.error("An unknown error occured.")
                    }
                }
            ); 
            } else {
                console.error("Geolocation is not supported by the browser");
            }
        }
    </script>
</body>
</html>`)
})

app.listen(PORT, () => {
    console.log("called")
})

/*

for live examples visit this site
https://permissions-policy-demo.glitch.me/demo/nav-allowed

*/

