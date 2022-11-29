const express = require('express');

const router = express.Router();

const albumController = require("../controllers/albumController")

//- as a user, I want to be able to see a all albums.
router.get("/",albumController.getAllAlbums)
//- as a user, I want to be able to create a new album.
router.post("/",albumController.createNewAlbum)
//- as a user, I want to be able to see an album by entering its id in the url.
router.get("/:id",albumController.getAlbumById)
// - as a user, I want to be able to modify an album.
router.put("/:id",albumController.modifyAlbum)
// - as a user, I want to be able to delete an album.
router.delete("/:id",albumController.deleteAlbum)

router.get("/:id/tracks", albumController.getTracksByAlbum)

module.exports = router