require("dotenv").config()
const app = require("express")

const port = parseInt(process.env.DB_PORT ?? "5005", 10)
