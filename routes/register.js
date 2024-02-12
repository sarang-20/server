const express = require('express');
const router = express.Router();
const register = require('../controllers/register');

const {body,validationResult}=require('express-validator')

router.post("/register", register.register); 

module.exports = router;