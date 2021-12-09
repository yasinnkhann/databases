var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }, // a function which produces all the messages
  create: function (params, callback) {
    const queryStr = 'INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)';

    db.query(queryStr, params, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};
