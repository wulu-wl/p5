//权限路由
const express = require('express');
const router = express.Router();
const jwt = require('./jsonwebtoken');
const db = require('./db');
const dbase = new db('cookbook');





module.exports = router;