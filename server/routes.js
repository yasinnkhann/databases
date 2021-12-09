var msgController = require('./controllers/messages.js');
var userController = require('./controllers/users.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/messages', msgController.get);

router.get('/users', userController.get);

router.post('/users', userController.post);


module.exports = router;

