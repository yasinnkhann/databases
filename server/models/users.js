var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  create: function (username, callback) {
    const queryStr = 'INSERT INTO users (username) VALUES (?)';

    db.query(queryStr, username, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};
