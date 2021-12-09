var models = require('../models');
var db = require('../db/index.js');
var modelMsgs = require('../models/messages.js');

module.exports = {
  get: function (req, res) {
    modelMsgs.getAll((err, data) => {
      if (err) {
        res.json('Could not get messages.');
      } else {
        res.json(data);
      }
    })
  },
  post: function (req, res) {
    const username = req.body.username;
    const message = req.body.message;
    const roomName = req.body.roomname;

    const args = [username, message, roomName];

    modelMsgs.create(args, (err, data) => {
      if (err) {
        res.json('Could not get messages.');
      } else {
        res.json('Successfully posted!');
      }
    })

  }
};

//// ALT everything done here
// module.exports = {
//   get: function (req, res) {
//     db.query('SELECT * FROM messages', (err, data) => {
//       if (err) {
//         res.json('Could not get messages.');
//       } else {
//         res.json(data);
//       }
//     })
//   },
//   post: function (req, res) {
//     const username = req.body.username;
//     const message = req.body.message;
//     const roomName = req.body.roomname;

//     const queryStr = 'INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)';
//     db.query(queryStr, [username, message, roomName], (err, data) => {
//       if (err) {
//         res.json('Could not post message.')
//       } else {
//         res.json('Successfully posted!')
//       }
//     });

//   }
// };
