const express = require("express");

const router = express.Router();

const app = express();

app.use(express.json())
const port = 5000;

app.use(router);

//* Track ====================================
const movieHandlers = require("./trackHandlers");

app.get("/api/track", trackHandler.getTrack);
app.get("/api/track/:id", trackHandler.getTrackById);

//* Album ====================================
const usersHandler = require("./albumHandler");

app.get("/api/album", albumHandler.getAlbum);
app.get("/api/album/:id", albumHandler.getAlbumById);

//* LISTEN ====================================
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

module.exports =app;