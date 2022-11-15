const express = require("express");

const app = express();

const port = parseInt(process.env.DB_PORT ?? "5005", 10)

app.use(express.json());


app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });
  
