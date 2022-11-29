const express = require('express');
require("dotenv").config()

const setUpRoutes = require("./src/routes/index.routes")
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json())

server.get('/', function (req, res) {
    res.send("HELLO")})

// server.use("/", router)
setUpRoutes(server)

server.listen(port, ()=> console.log(`server listening on ${port}`))