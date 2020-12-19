
var express = require('express');
var router = express.Router();

const users = require('../services/user.service');

router.post('/signUp', users.create);
router.get('/users', users.getUsers);
router.post('/register',users.register);



module.exports = router