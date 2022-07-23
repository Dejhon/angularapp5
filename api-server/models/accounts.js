let mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Account = new Schema({
    studentID: {
        type: String
    },
    bank: {
        type: String
    },
    branch: {
        type: String
    },
    accountNumber:{
        type: Number
    },
    accountType:{
        type: String
    },
    status:{
        type: String
    }
},{
   collection: 'accounts' 
})

module.exports = mongoose.model('accounts', Account)