const express = require('express');

const router = express.Router();

const albumController = require("../controllers/albumController")

//- as a user, I want to be able to see a all albums.
router.get("/albums",albumController.getAllAlbums)
//- as a user, I want to be able to create a new album.
router.post("/albums",albumController.createNewAlbum)
//- as a user, I want to be able to see an album by entering its id in the url.
router.get("/albums/:id",albumController.getAlbumById)


module.exports = router