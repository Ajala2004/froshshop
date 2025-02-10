const Product = require("../models/product");
const s3 = require("../config/awsConfig")
const multer = require("multer");

// const { S3 } = require("aws-sdk");
const upload = multer()



async function addproduct(req, res) {
    // const { email, password } = req.body
    try {
        
        const { productName,brandName ,category,price,details ,selling} = req.body
        // if(!req.file){
        //     return res.status(400).json({
        //         message:"image file is required",
        //         error:true,
        //         success:false,
        //     })
        // }
        // const filecontent = Buffer.from(req.file.buffer,"binary")
        const params = { 
            Bucket: "froshecommerce",  
            Key:`product/${Date.now()}_${req.file.originalname}`,
            Body:req.file.buffer,
            ContentType: req.file.mimetype,
            // ACL: "public-read"
        }
        const s3response = await s3.upload(params).promise();
        // const imageUrl = s3response.location;
        const newProduct = new Product({
            productName,
            brandName,
            selling,
            category,
            price,
            details,
            imageUrl:s3response.Location,
        })
        await newProduct.save()
       res.json({
        data:newProduct,  
        sucess:true,
        error: false,
        message: "all users"
       })
 
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            sucess: false
        })

    }
}
module.exports = addproduct