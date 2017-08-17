var express = require('express');
var router = express.Router();
var pg = require('pg');

var poolModule = require('../modules/pool.js');
var pool = poolModule;

router.post('/', function(req, res) {
  //console.log('log the data: ', req.user.id, req.body);
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      //console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //GET tasks from the database
      var queryText = 'INSERT INTO "user_writing" ("user_id", "writing") VALUES ($1, $2);';
      db.query(queryText, [req.user.id, req.body.story], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          //console.log('Attempted to query with', queryText);
          //console.log('Error making query');

          res.sendStatus(500);
        } else {
          //console.log(result);
          //name array (arrayOfTasks) and send result to client
          res.send('posting a story success');
        }
      });
    }
  });
});

module.exports = router;
