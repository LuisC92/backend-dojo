const Album = require("../models/albumModel");

const getAllAlbums = (req, res) => {
  Album.getAll()
    .then(([results]) => res.status(200).send(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving all albums");
    });
};

const getAlbumById = (req, res) => {
  const { id } = req.params;
  Album.getById(id)
    .then(([results]) => {
      results[0] !== undefined ? res.status(200).send(results[0]) : res.sendStatus(404);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(`error retrieving album with id: ${id}`);
    });
};

const createNewAlbum = (req, res) => {
  Album.createAlbum(req.body)
    .then(([results]) => {
      // console.log(results);
      const newAlbum = {
        id: results.insertId,
        title: req.body.title,
        genre: req.body.genre,
        picture: req.body.picture,
        artist: req.body.artist,
      };
      res.status(201).send(newAlbum);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating album");
    });
};

const modifyAlbum = (req, res) => {
  //* edit current album
  Album.editAlbum(req.body, req.params.id)
    .then((results) => {
      res.status(200).send(results)
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error editing album");
    });
}

const deleteAlbum = (req, res) => {
  Album.deletedAlbum(req.params.id)
  .then((results) => {
    if(results.affectedRows){
      res.status(202).send("The album with id "+req.params.id+" was deleted")
    } else {
      res.sendStatus(404)
    }
  })
}

const getTracksByAlbum = (req, res) => {
  Album.getTracks(req.params.id)
  .then(results => results.length ? res.status(200).send(results) : res.sendStatus(404))
}


module.exports = {
  getAllAlbums,
  createNewAlbum,
  getAlbumById,
  modifyAlbum,
  deleteAlbum,
  getTracksByAlbum
};
