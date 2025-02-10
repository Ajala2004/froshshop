const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


async function userdetailsController(req, res) {
    // const { email, password } = req.body
    try {
       
       
       const user = await User.findById(req.userId)
   
       res.status(200).json({
        data:user,
        sucess:true,
        error: false,
        message: "login user details"
       })
 
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            sucess: false
        })

    }
}
module.exports = userdetailsController 