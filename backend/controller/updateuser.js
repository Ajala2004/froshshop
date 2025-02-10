const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


async function updateuser(req, res) {
    // const { email, password } = req.body
    try {
        const sessionuser = req.userId
        const { userId, email, name, role } = req.body
        const payload = {
            ...(email && { email }),
            ...(name && {  name }),
            ...(role && {  role }),
        }
        const user = await User.findById(sessionuser)
        console.log("user role", user.role)
        const updateUser = await User.findByIdAndUpdate(userId, payload,{new:true})
        console.log("pay",updateUser)


        res.status(200).json({
            data: updateUser,
            sucess: true,
            error: false,
            message: "update sucessfully"
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            
            sucess: false
        })

    }
}
module.exports = updateuser 