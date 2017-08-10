var express = require('express');
var router = express.Router();
var pg = require('pg');

var poolModule = require('../modules/pool.js');
var pool = poolModule;

router.get('/', function(req, res) {
  console.log('start');
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //GET tasks from the database
      var queryText = 'SELECT * FROM "users" JOIN "user_writing" ON "users"."id" = "user_writing"."user_id" WHERE "users"."id"=$1;';
      db.query(queryText, [req.user.id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');

          res.sendStatus(500);
        } else {
          console.log(result);
          //name array (arrayOfTasks) and send result to client
          res.send({
            arrayOfWriting: result.rows
          });
        }
      });
    }
  });
});//end of get router

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  console.log('Delete', id);
  //error connecting is boolean, db is what we query against
  //done is a function that we can when we're done
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'DELETE FROM "user_writing" WHERE id = $1';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, [id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');

          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.sendStatus(200);
        }
      });
    }
  });
});//end of delete router

router.put('/:id', function(req, res) {
  console.log(req);
  var id = req.params.id;
  console.log(id);
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'UPDATE "tasks" SET "complete" = true WHERE id =$1;';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, [id], function(errorMakingQuery, result) {
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
