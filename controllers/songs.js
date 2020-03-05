const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  let query_result = `SELECT songs.name, albums.name as album, artists.name AS artist,
  genres.name as genre, songs.audio FROM songs
  LEFT JOIN albums on songs.album = albums.id
  LEFT JOIN artists on songs.artist = artists.id
  LEFT JOIN genres on songs.genre = genres.id `;

  if (req.query.album) query_result += `WHERE albums.id=${req.query.album}`;
  if (req.query.artist) query_result += `WHERE artists.id=${req.query.artist}`;
  if (req.query.genre) query_result += `WHERE genres.id=${req.query.genre}`;
  db.query(query_result, (err, results) => {
    // results
    if (err) {
      res.send(err);
    } else {
      console.log("query", req.query);
      res.send(results);
    }
  });
});

module.exports = router;
