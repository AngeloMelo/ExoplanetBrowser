const express = require('express')
const router = express.Router()
const Facility = require('../models/FacilityModel')

router.get('/', (req, res)=>
{
    Facility.find()
        .sort({name: 1})
        .then(results => res.json(results));
})

module.exports = router