const Product = require("../models/product");
const s3 = require("../config/awsConfig")
const multer = require("multer");

// const { S3 } = require("aws-sdk");
const upload = multer()



async function addproduct(req, res) {
    // const { email, password } = req.body
    try {
        
      
       
 
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            sucess: false
        })

    }
}
module.exports = addproduct