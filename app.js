require("dotenv").config();
const express = require("express");
const router = require("./router");

const app = express(); //com este express() podemos fazer os métodos de get,post....

const port = parseInt(process.env.APP_PORT ?? 5000, 10); //aqui vai buscar o APP_PORT, se não (??) vai ler o 5000

app.use(router);
app.use(express.json()); //permite a leitura do formato json

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
