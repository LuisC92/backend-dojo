const Track = require("../models/trackModel");

const getAllTracks = (req, res) => {
  Track.getEveryTrack()
    .then((results) => res.status(200).send(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving all albums");
    });
};

const createTrack = (req, res) => {
  Track.createAssignTrack(req.body)
    .then(([results]) => {
      const newTrack = {
        id: results.insertId,
        id_album: req.body.id_album,
        title: req.body.title,
        youtube_url: req.body.youtube_url,
      };
      res.status(201).send(newTrack);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating track");
    });
};

const getAllAlbumSongs = (req, res) => {
  const { id } = req.params;
  Track.getAll(id)
    .then(([results]) => res.status(200).send(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving all albums");
    });
};

module.exports = {
  getAllTracks,
  createTrack,
  getAllAlbumSongs,
};
