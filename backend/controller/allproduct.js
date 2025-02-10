const Product = require("../models/product");




async function allproduct(req, res) {
    
    try {
        const allproduct = await Product.find()
          
        
        
       res.json({
        data:allproduct,   
        sucess:true,
        error: false,
        message: "all products"
       })
 
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            sucess: false
        })

    }
}
module.exports = allproduct