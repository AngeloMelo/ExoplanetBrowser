const express = require('express');
const router = express.Router();
const DiscMethod = require('../models/DiscoveryMethodModel');

router.get('/', (req, res)=>
{
    DiscMethod.find()
        .sort({name: 1})
        .then(results => res.json(results))
        .catch(err => console.log)
});

module.exports = router;  