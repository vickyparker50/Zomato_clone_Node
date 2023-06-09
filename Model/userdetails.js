const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const UserdetailsSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        mobile_number:{
            type:Number,
            required:true
        },
        address:{
            type: String,
            required:true
        }
    })
    

module.exports = mongoose.model('details', UserdetailsSchema, 'userdetails');