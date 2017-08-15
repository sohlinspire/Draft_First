var express = require('express');
var router = express.Router();
var pg = require('pg');

var poolModule = require('../modules/pool.js');
var pool = poolModule;



router.post('/', function(req, res) {
  //console.log('log the data: ', req.user.id, req.body);
  var oc = req.body.data;
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      //console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //GET tasks from the database
      var queryText = 'INSERT INTO "user_ideas" ("user_id", "idea", "who", "what", "ware", "wen", "why", "how") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
      db.query(queryText, [req.user.id, oc.idea, oc.who, oc.what, oc.where, oc.when, oc.why, oc.how], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          //console.log('Attempted to query with', queryText);
          //console.log('Error making query');

          res.sendStatus(500);
        } else {
          //console.log(result);
          //name array (arrayOfTasks) and send result to client
          res.send('posting a idea success');
        }
      });
    }
  });
});



module.exports = router;
