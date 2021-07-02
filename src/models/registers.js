const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fistName : {
        type:String,
        required:true
    },
    secondName : {
        type:String,
        required:true
    },
    age : {
        type:Number,
        required:true
    },
    phoneNumber : {
        type:Number,
        required:true,
        unique: true

    },
    state : {
        type:String,
        required:true
    },
    city : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique: true
    },
    AdhaarNumber : {
        type:Number,
        required:true,
        unique:true
    },
    
})

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;