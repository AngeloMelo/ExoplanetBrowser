const express = require('express')
const router = express.Router()
const Host = require('../models/HostModel')

router.get('/', (req, res)=>
{
    Host.find()
        .sort({name: 1})
        .then(results => res.json(results));
})

module.exports = router