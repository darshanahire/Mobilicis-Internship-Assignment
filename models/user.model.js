const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        default:"tempuser"
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        minLength:6,
        required:true
    },
    about:{
        type:String,
        default:"This is sample about please edit it."
    },
    skills:{
        type:Array
    },
    profDetails:{
        type:String
    },
    certifications:{
        type:Array
    },
    experience:{
        type:Array
    },
    education:{
        type :Array
    },
    connections:{
        type:Array
    }
})

const User = mongoose.model("Users", UserSchema);
module.exports = User;