const express = require('express');
const router = express.Router();
const PlanetData = require('../models/PlanetDataModel');
const ReloadLog = require('../models/reloadLogModel');

router.get('/', async (req, res)=>
{
    try{
        const planets = await PlanetData.find()
        const logs = await ReloadLog.find().sort({create_date: -1})
    
        res.json({count: planets.length, last_update: logs[0].create_date})
    }
    catch(err){
        console.log('Error fetching status data: ' + err.message)
    }

});

module.exports = router;  