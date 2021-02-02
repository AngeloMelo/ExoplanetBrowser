const mongoose = require('mongoose');

const ReloadLogSchema = mongoose.Schema({
    log : {
        type : String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const ReloadLog = module.exports = mongoose.model('logs', ReloadLogSchema);