const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


async function userdisable(req, res) {
  
    try {
      
         const UserId = req.params.id

        const {disabled} = req.body


        const user = await User.findByIdAndUpdate(UserId,{disabled},{new: true})
        if(!user){
            throw new Error("user not found")
        }
       res.json({
        
        sucess:true,
        error: false,
        message: " user disabled"
       })
 
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            sucess: false
        })

    }
}
module.exports =userdisable