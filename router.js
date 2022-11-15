const express = require("express");

const router = express.Router();

const albumHandler = require("./albumHandler");
router.get("/", albumHandler.welcome);
router.get("/albums", albumHandler.getAlbuns);
router.post("/albums", albumHandler.postAlbum);

module.exports = router;
/*
// Events routes


router.get("/events", eventsHandler.getEvents);
router.get("/events/:id", eventsHandler.getEventsById);
router.post("/events", eventsHandler.postEvent);
router.put("/events/:id", eventsHandler.updateEvent);
router.delete("/events/:id", eventsHandler.deleteEvent);

// Suggestions routes
const suggestionsHandler = require("./suggestionsHandler");

router.get("/suggestions", suggestionsHandler.getSuggestions);
router.get("/suggestion/:id", suggestionsHandler.getSuggestionsById);
router.post("/suggestions", suggestionsHandler.postSuggestion);
router.put("/suggestions/:id", suggestionsHandler.updateSuggestion);
router.delete("/suggestions/:id", suggestionsHandler.deleteSuggestion);

module.exports = router;
*/
