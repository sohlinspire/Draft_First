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

router.put('/', function(req, res) {
  console.log('this is my', req.body);
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'UPDATE "user_writing" SET "writing" = $1 WHERE id = $2;'

      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, [req.body.story, req.body.id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          console.log(errorMakingQuery);
          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.sendStatus(200);
        }
      });
    }
  });
});

module.exports = router;
