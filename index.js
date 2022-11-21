const express = require('express');
require("dotenv").config()

const router = require("./src/routes/routes")
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json())

server.get('/', function (req, res) {
    res.send("HELLO")})

server.use("/", router)

server.listen(port, ()=> console.log(`server listening on ${port}`))