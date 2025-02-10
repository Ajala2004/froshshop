const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : String,
    role: String, 
    profilepic : String  ,
    disabled: {
        type: Boolean, 
        default:false
    }
      
},{
    timestamps : true
})

const User = mongoose.model("users",userScema)

module.exports = User