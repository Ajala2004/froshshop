const mongoose = require('mongoose')

const productScema = new mongoose.Schema({
    productName : String,
    brandName : String, 

   
    price : String,
    selling: String,
    details: String, 
    category : String, 
    imageUrl: String,  
      
})

const Product = mongoose.model("product",productScema)

module.exports = Product