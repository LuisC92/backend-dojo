const connection = require("../../db");
// get all albums
const getAll = () => {
  return connection.query("SELECT * FROM album").then((results) => results);
};

const getById = (id) => {
  return connection
    .query("SELECT * FROM album WHERE id = ?", id)
    .then((results) => results);
};

const create = (body) => {
  return connection
    .query("INSERT INTO album SET ?", body)
    .then((results) => results);
};

const modify = (body, id) => {
  return connection
    .query("UPDATE album SET ? WHERE id=?", [body, id])
    .then(([results]) => results);
};

const erase = (id) => {
  return connection
    .query("DELETE FROM album WHERE id=?", [id])
    .then(([results]) => results);
};

module.exports = {
  getAll,
  getById,
  create,
  modify,
  erase,
};
