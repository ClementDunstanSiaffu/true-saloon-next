

const mongoose = require('mongoose');

var appointSchema = new mongoose.Schema ({

    name: { 
        type:String
    },

    email: {
        type:String
    },

    phone : {
        type:String
    },

    barber : {
        type:String
    },
    
    date: { 
        type:String
    },

    time: {
        type:String
    },

    service : {
        type:String
    },

    shop : {
        type:String
    }
})

module.exports = mongoose.model('APPOINT',appointSchema);