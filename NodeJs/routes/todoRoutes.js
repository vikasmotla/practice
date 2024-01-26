const express = require('express');
const router = express.Router();
const todo = require('../database');

router.get('/', (req, res)=>{
    res.json({msg: 'all todos'})
})

module.exports =  router;