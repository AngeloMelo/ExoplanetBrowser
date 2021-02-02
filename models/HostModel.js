const mongoose = require('mongoose')

const HostSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Host = module.exports = mongoose.model('hosts', HostSchema)