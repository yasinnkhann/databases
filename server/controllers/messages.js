var models = require('../models');
const db = require('../db/index.js');

module.exports = {
  get: function (req, res) {
    console.log('hey')
    db.query(`SELECT * FROM messages`, (err, data) => {
      if (err) {
        res.json('Could not get messages.');
      } else {
        res.json(data);
      }
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    const username = req.body.username;
    const message = req.body.text;
    const roomName = req.body.roomname;

    const queryStr = `INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)`;
    db.query(queryStr, [username, message, roomName], (err, data) => {
      if (err) {
        res.json('Could not post message.')
      } else {
        res.json('Successfully posted!')
      }
    });

  } // a function which handles posting a message to the database
};
