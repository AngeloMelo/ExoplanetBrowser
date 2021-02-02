const mongoose = require('mongoose')

const DiscmethodSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

const DiscMethod = module.exports = mongoose.model('discoverymethods', DiscmethodSchema)