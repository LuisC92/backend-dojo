const database = require("./database");

const welcome = (request, response) => {
  response.send("Welcome to my favourite album list");
};

const getAlbuns = (req, res) => {
  database
    .query("select * from album")
    .then(([album]) => {
      res.status(200).json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postAlbum = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  database
    .query(
      "insert into album (title, genre, picture, artist) values (?, ?, ?, ?)",
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      /*       console.log(result); */
      res.location(`/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the movie");
    });
};

module.exports = {
  welcome,
  getAlbuns,
  postAlbum,
};

/*
const getEvents = (req, res) => {
  database
    .query("select * from events")
    .then(([events]) => {
      res.status(200).json(events);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getEventsById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("select * from events where id = ?", [id])
    .then(([events]) => {
      if (events[0] != null) {
        res.status(200).json(events[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postEvent = (req, res) => {
  const { city, title, url, image, description, outdoor } = req.body;

  database
    .query(
      "INSERT INTO events(city, title, url, image, description, outdoor) VALUES (?, ?, ?, ?, ?, ?)",
      [city, title, url, image, description, outdoor]
    )
    .then(([result]) => {
      res.location(`/events/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the event");
    });
};

const updateEvent = (req, res) => {
  const { city, title, url, image, description, outdoor } = req.body;
  const id = parseInt(req.params.id, 10);

  database
    .query(
      "UPDATE events SET city=?, title=?, url=?, image=?, description=? outdoor=? WHERE id=?",
      [city, title, url, image, description, outdoor, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the event");
    });
};

const deleteEvent = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM events WHERE id=?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the event");
    });
};
*/
