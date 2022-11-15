const connection = require("./db");

const createNewAlbum = (req, res) => {
  const {title, genre, picture, artist} = req.body;
  connection
    .query("INSERT INTO ALBUM (title, genre, picture, artist) VALUES (?, ?, ?, ?)", [title, genre, picture, artist])
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};
const getAllAlbums = (req, res) => {
  connection
    .query("SELECT * FROM album")
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};




module.exports = {
  createNewAlbum,
  getAllAlbums
};

