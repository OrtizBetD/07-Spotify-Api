const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT  albums.id AS album_id, albums.name AS album, artists.name AS artist, albums.cover
    FROM albums LEFT JOIN artists on albums.artist = artists.id`,
    (err, results) => {
      // results
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    }
  );
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT albums.id AS 'album_id', albums.name AS 'album', artists.name AS 'artist', albums.cover
  FROM albums LEFT JOIN artists on albums.artist = artists.id  WHERE albums.id=${req.params.id}`,
    (err, results) => {
      // results
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
