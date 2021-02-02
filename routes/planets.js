const express = require('express');
const router = express.Router();
const PlanetData = require('../models/PlanetDataModel');
const formatDateForQuery = require('../utils/formatDateForQuery');

router.get('/', (req, res)=>
{
    const ini = req.query['iniDate'] || ''
    let fin = req.query['finDate'] || ''
    let hostName = req.query['name'] || ''
    let facility = req.query['facility'] || ''
    let method = req.query['method'] || ''
    let statements = new Array()

    if(ini)
    {
        let dtParam = formatDateForQuery(ini)
        statements.push({"rowupdate": {"$gte": dtParam}})
    }

    if(fin)
    {
        let dtParam = formatDateForQuery(fin)
        statements.push({"rowupdate": {"$lt": dtParam}})
    }

    if(hostName)
    {
        statements.push({"pl_hostname": { $regex: '.*' + hostName + '.*' } });
    }
    
    if(facility)
    {
        statements.push({"pl_facility": facility  });
    }

    console.log('method' + method)
    if(method)
    {
        statements.push({"pl_discmethod": method  });
    }

    let queryobj = {};
    if(statements.length >0)
        queryobj = { $and: statements };
    
    PlanetData.find(queryobj)
        .sort({rowupdate: -1})
        .then(resp => {
            const formResp = resp.map(pd =>{
                return {_id: pd._id, 
                    pl_hostname: pd.pl_hostname, 
                    pl_letter: pd.pl_letter, 
                    pl_name: pd.pl_name, 
                    pl_discmethod: pd.pl_discmethod, 
                    st_dist: pd.st_dist, 
                    rowupdate: pd.rowupdate, 
                    pl_facility: pd.pl_facility }                
            })
            res.json(formResp)
        });
    
});

router.get('/:id', (req, res)=>
{
    const id = req.params.id

    PlanetData.findById(id).then(resp => res.json(resp))
    
});

module.exports = router;  