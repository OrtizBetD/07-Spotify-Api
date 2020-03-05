const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(`SELECT * FROM genres`, (err, results) => {
    // results
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.get("/:id", (req, res) => {
  db.query(`SELECT * FROM genres where id=${req.params.id}`, (err, results) => {
    // results
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
