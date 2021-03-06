var modelUsers = require('../models/users.js');
// var db = require('../db/index.js');

module.exports = {
  get: function (req, res) {
    modelUsers.getAll((err, data) => {
      if (err) {
        res.json('Could not get users');
      } else {
        res.json(data);
      }
    })
  },
  post: function (req, res) {
    const username = req.body.username;

    modelUsers.create(username, (err, data) => {
      if (err) {
        res.json('Could not post user.');
      } else {
        res.json('Successfully posted user!');
      }
    })
  }
};

//// ALT everything done here
// module.exports = {
//   get: function (req, res) {
//     db.query('SELECT * FROM users', (err, data) => {
//       if (err) {
//         res.json('Could not get users');
//       } else {
//         res.json(data);
//       }
//     })
//   },
//   post: function (req, res) {
//     const username = req.body.username;

//     const queryStr = 'INSERT INTO users (username) VALUES (?)';

//     db.query(queryStr, username, (err, data) => {
//       if (err) {
//         res.json('Could not post user.')
//       } else {
//         res.json('Successfully posted user!')
//       }
//     });
//   }
// };