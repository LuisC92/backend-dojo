const express = require("express");

const router = express.Router();
const app = require("express")
const port = parseInt(process.env.DB_PORT ?? "5005", 10)

const handler = require("./requests");

router.post("/albums", handler.createNewAlbum);
router.get("/albums", handler.getAllAlbums);

app.listen(5005, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });

module.exports = router;
