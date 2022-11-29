const connection = require("../../db");
// get all albums
const getAll = () => {
  return connection.query("SELECT * FROM track").then((results) => results);
};

const getById = (id) => {
  return connection.query("SELECT * FROM track WHERE id = ?",id).then(([results]) => results);
};

const createTrack = (track) => {
    return connection
    .query("INSERT INTO track SET ?", track)
    .then(([results]) => results);
}

const getByAlbum = (albumId) => {
    return connection.query("SELECT * FROM track WHERE id_album = ?",albumId)
        .then(([results]) => results)
}

const editTrack = (track, id)=>{
    return connection.query("UPDATE track SET ? WHERE id = ?",[track, id])
    .then(([results])=> results)
}

const deletedTrack = (id) => {
    return connection.query("DELETE FROM track WHERE id = ?", id)
      .then(([results]) => results)
  }

module.exports = {
  getAll,
  getById,
  createTrack,
  getByAlbum,
  editTrack,
  deletedTrack
};
