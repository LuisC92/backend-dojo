const connection = require("./db");

const createAlbum = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  connection
    .query("INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)", [
        title, 
        genre, 
        picture, 
        artist
    ])
    .then(([result]) => {
      // console.log(result)
      res.location(`/albums/${result.insertId}`).sendStatus(201)
      const createdAlbum = {
        id: result.insertId,
        title, 
        genre, 
        picture, 
        artist
      };
      res.status(201).json(createAlbum);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


const getAll = (req, res) => {
  connection
    .query("SELECT * FROM users")
    .then(([results]) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  connection
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([results]) => {
      if (results.length) {
        res.json(results[0]);
      } else {
        res.sendStatus(404);
      }
    });
};



const editUser = (req, res) => {
  connection
    .query("UPDATE users SET ? WHERE id = ?", [req.body, req.params.id])
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  connection
    .query("DELETE FROM user WHERE id = ?", [req.params.id])
    .then(([result]) => {
      if (result.affectedRows)
        res.status(204).send(`The User ${req.params.id} was been deleted`);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  createAlbum,
  getAllAlbums,
  getUserById,
  editUser,
  deleteUser,
};