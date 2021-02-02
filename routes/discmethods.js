const express = require('express');
const router = express.Router();
const DiscMethod = require('../models/DiscoveryMethodModel');

router.get('/', (req, res)=>
{
    DiscMethod.find()
        .sort({name: 1})
        .then(results => res.json(results));
});

// router.post('/', (req, res)=>
// {
//     const newKey = new Keyword({
//         name : req.body.name
//     });

//     newKey.save().then(kw => res.json(kw));
// });

// router.put('/:id',(req,res)=>{
//     let updt = {
//         title : req.body.title,
//         description: req.body.description,
//         keywords: []
//     };

//     Report.findOneAndUpdate({_id:req.params.id},updt)
//         .then(()=> res.json({success:true}))
//         .catch(err => res.status(404).json({success:false}));
// });

// router.delete('/:id',(req,res)=>{
//     Report.findById(req.params.id)
//         .then(report => report.remove())
//         .then(()=> res.json({success:true}))
//         .catch(err => res.status(404).json({success:false}));
// });

module.exports = router;  