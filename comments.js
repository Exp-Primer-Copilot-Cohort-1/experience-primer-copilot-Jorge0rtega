// create web server 
// 1. import express
const express = require('express');
// 2. create an instance of express
const app = express();
// 3. create a port number
const port = 3000;
// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});