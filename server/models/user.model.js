const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        
    },
    hashedPassword:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    roles:[
        {
            type:String
        }
    ],
    versionKey:false
});

module.exports= mongoose.model('User',UserSchema);