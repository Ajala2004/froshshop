  const jwt = require("jsonwebtoken")

  async function authtoken (req,res,next){
    try {
        const token = req.cookies?.token 
        console.log("token" ,token)  
        if(!token){
              return res.status(100).json({
                 message: "user not found",
                 error: true,
                 sucess:false
              })
        }
        jwt.verify(token,process.env.JWT_SECRET,function(err,decode){
          //  if(err){
          //   console.log("error auth")
          //  }
          console.log("err",  err)
          console.log(decode) 
           req.userId = decode?._id   

           next()
        }) 
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data:[],
            error: true,
            sucess: false
        })
    }
  }
  module.exports = authtoken