Steps to create and start express server
1. set up npm package ->
    npm init -y
2. install express
    npm i express --save
3. to avoid restarting the server after every change to reflect, install nodemon
    npm i nodemon
4. create public folder to load html or js files and index.js which our root file
5. inside package.json write start script, this start file will start the specified file where
    we will have our server configuration
    "script": {
        "server1": "nodemon ./server1/index.js"
        "server2": "nodemon ./server2/index.js"
    }
6. start the server npm run server1, server2
