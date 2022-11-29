const connection = require("../../db");
// get all albums
const getAll = () => {
  return connection.query("SELECT * FROM album").then((results) => results);
};

const getById = (id) => {
    return connection.query("SELECT * FROM album WHERE id = ?", id).then((results) => results)
}

const createAlbum = (body) => {
  return connection
    .query("INSERT INTO album SET ?", body)
    .then((results) => results);
};

const editAlbum = (body,id) => {
  return connection.query("UPDATE album SET ? WHERE id = ?",[body, id])
    .then(([results])=> results)
}

const deletedAlbum = (id) => {
  return connection.query("DELETE FROM album WHERE id = ?", id)
    .then(([results]) => results)
}

const getTracks = (albumId)=>{
  return connection.query("SELECT * FROM track WHERE id_album = ?",albumId)
  .then(([results]) => results)
}

module.exports = {
  getAll,
  getById,
  createAlbum,
  editAlbum,
  deletedAlbum,
  getTracks
};
