// var db = require('../db');
const { Message } = require('../db/index.js');


module.exports = {
  getAll: async function (callback) {
    try {
      const messages = await Message.findAll();
      callback(null, messages);
      console.log('All messages: ', JSON.stringify(messages, null, 2));
      // console.log('All messages: ', messages);
    } catch (err) {
      callback(err, null);
    }

    //// MYSQL
    // db.query('SELECT * FROM messages', (err, data) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, data);
    //   }
    // })
  },

  create: async function (params, callback) {
    try {
      const newRecord = await Message.create({
        username: params.username,
        message: params.message,
        roomname: params.roomName
      });
      callback(null, newRecord);
    } catch (err) {
      callback(err, null);
    }
      //// MYSQL
    // const queryStr = 'INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)';

    // db.query(queryStr, params, (err, data) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, data);
    //   }
    // });
  }
};
