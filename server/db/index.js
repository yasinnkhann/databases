var mysql = require('mysql2');
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

//// MYSQL DB
// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'chat'
// });

// dbConnection.connect(err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected to MySQL!');
//   }
// })

// module.exports = dbConnection;

const db = new Sequelize('chat', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});


try {
  db.authenticate(); // dont need await since its local I think
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Message = db.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roomname: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.sync();
Message.sync();

// Force sync all models
// It will drop the table first
// and re-create it afterwards
// User.sync({ force: true });
// Message.sync({ force: true });

module.exports.db = db;
module.exports.User = User;
module.exports.Message = Message;