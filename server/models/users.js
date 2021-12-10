// var db = require('../db');
const { User } = require('../db/index.js');

module.exports = {
  getAll: async function (callback) {
    try {
      const users = await User.findAll();
      callback(null, users);
      console.log('All users: ', JSON.stringify(users, null, 2));
      // console.log('All users: ', users);
    } catch (err) {
      callback(err, null);
    }
    //// MYSQL
    // db.query('SELECT * FROM users', (err, data) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, data);
    //   }
    // });
  },
  create: async function (username, callback) {
    try {
      const newRecord = await User.create({
        username: username
      });
      callback(null, newRecord);
    } catch (err) {
      callback(err, null);
    }
    //// MYSQL
    // const queryStr = 'INSERT INTO users (username) VALUES (?)';

    // db.query(queryStr, username, (err, data) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, data);
    //   }
    // });
  }
};
