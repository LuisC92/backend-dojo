const express = require("express");

const router = express.Router();

const albumHandler = require("./albumHandler");

router.post("/albums", albumHandler.createAlbum);
router.put("/:id", albumHandler.createUser);
router.get("/", albumHandler.getAllUsers);
router.get("/:id", albumHandler.getUserById);
router.delete("/:id", albumHandler.deleteUser);

module.exports = router;