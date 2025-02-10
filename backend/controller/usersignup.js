const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
 

async function usersignupController(req,res) {
    try{
        const{email, name, password}= req.body
        
        const userexist = await User.findOne({email})
        if(!email){
            throw new Error("please provide email")
        }
        if(userexist){
            throw new Error("user exist")
        }
        if(!name){
            throw new Error("please provide name") 
        } 
        if(!password){
            throw new Error("please provide password")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashpassword = await bcrypt.hashSync(password, salt);
         if (!hashpassword) {
            throw new Error ("something is wrong")
         }
         const payload = {
            ...req.body, 
            password : hashpassword ,
            role: "GENERAL"

         }
 
         
        const userData = new User(payload) 
        
        const saveUser = userData.save()  
        res.status(201).json({
            data : saveUser,
            sucess : true,
            error : false, 
            message : "user created successfully" 
        })
    }catch(error){
        res.json({
            message : error,
            error : true,  
            sucess : false,   
        })
    }
}

module.exports = usersignupController