const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
 
async function usersigninController(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({  
                message: "User not found",

            })
        }
        if(user.disabled){
            res.json({ 
                message: "User has been disables", 
 
            }) 
        }   
        ismatch = await bcrypt.compare(password, user.password);
        if (ismatch) {  
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.JWT_SECRET,
                { expiresIn: 60 * 60 * 8 }
            );
            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            res.cookie("token", token, tokenOption).json({
                message: "user login sucessfully",
                data: token, 
                sucess: true,
                error: false 
            }
            )
        }else{
            throw new Error("please check")
        }

       

    } catch (error) {
        res.status(500).json({
            error:true,
            sucess:false,
            message: "User not found", 
        })

    }
}
module.exports = usersigninController 