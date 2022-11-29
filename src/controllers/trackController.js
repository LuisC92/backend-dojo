const Track = require("../models/trackModel");

const getAllTracks = (req, res) => {
    if(req.query.albumId){
        Track.getByAlbum(req.query.albumId)
            .then(results => results.length ? res.status(200).send(results) : res.sendStatus(404))
    } else {
        Track.getAll()
          .then(([results]) => res.status(200).send(results))
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving Tracks from db.");
          });
    }
};

const getTrackById = (req, res) => {
  Track.getById(req.params.id).then((results) =>
    results.length ? res.status(200).send(results[0]) : res.sendStatus(404)
  )
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving Track with id: "+req.params.id);
  });
};

const createNewTrack = (req, res) => {
    Track.createTrack(req.body)
        .then(([results]) =>{
            const createdTrack = {
                id:results.insertId,
                id_album: req.body.id_album,
                title: req.body.title,
                youtube_url: req.body.youtube_url
            }
            res.status(201).send(createdTrack)
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error creating a Track.");
          });
}

const editTrack = (req, res) => {
    Track.editTrack(req.body, req.params.id)
    .then((results) => {
      res.status(200).send(results)
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error editing track");
    });
}

const deleteTrack = (req, res)=>{
    Track.deletedTrack(req.params.id)
    .then((results) => {
      if(results.affectedRows){
        res.status(202).send("The track with id "+req.params.id+" was deleted")
      } else {
        res.sendStatus(404)
      }
    })
}

module.exports = {
  getAllTracks,
  getTrackById,
  createNewTrack,
  editTrack,
  deleteTrack
};
