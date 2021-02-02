const mongoose = require('mongoose')

const FacilitySchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Facility = module.exports = mongoose.model('facilities', FacilitySchema)