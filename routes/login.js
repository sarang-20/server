const express = require('express');
const router = express.Router();
const login = require('../controllers/login');

const {body,validationResult}=require('express-validator')


router.post("/login", login.login);

module.exports = router;