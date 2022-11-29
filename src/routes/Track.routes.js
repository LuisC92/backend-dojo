const express = require('express');

const router = express.Router();

const trackController = require("../controllers/trackController")

// - as a user, I want to be able to see all songs.
// - as a user, I want to list all the songs from an album.
router.get("/",trackController.getAllTracks)
// - as a user, I want to be able to see an song by entering is id in the url.
router.get("/:id",trackController.getTrackById)
// - as a user, I want to create and assign a song to an album.
router.post("/",trackController.createNewTrack)
// - as a user, I want to edit a song from an album.
router.put("/:id",trackController.editTrack)
// - as a user, I want to delete a song.
router.delete("/:id",trackController.deleteTrack)


module.exports = router