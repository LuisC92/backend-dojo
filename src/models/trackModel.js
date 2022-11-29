const connection = require("../../db");
//get all tracks
const getEveryTrack = () => {
  return connection.query("SELECT * FROM track").then(([results]) => results);
};

const createAssignTrack = (body) => {
  return connection
    .query("INSERT INTO track SET ?", body)
    .then((results) => results);
};

// as a user, I want to list all the songs from an album.
const getAll = (id) => {
  return connection
    .query("SELECT * FROM track WHERE id_album=?", id)
    .then((results) => results);
};

module.exports = {
  getEveryTrack,
  createAssignTrack,
  getAll,
};
