import React, { useState } from 'react'
import "./component.css"
import { ToastContainer, toast } from 'react-toastify'
import uploadimage from './uploadimage';
import { FaTimes,FaCloudDownloadAlt } from "react-icons/fa";
import productcategory from './productcategory';
import axios from 'axios';
 function addproduct({
  onClose
 }
  
) {
  const [fdata, setfdata] = useState({
    productName: "",
    brandName: "",
    category: "",
    price: "",
    selling: "",
  })
  const [image, setImage] = useState(null)
  const handleChange = async (e) => {
    const { name, value } = e.target

    setfdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  console.log(fdata)
  const [uploadproductimage,setuploadproductimage] = useState("")
  const handleuploadImage = async(e)=>{
    setImage( e.target.files[0])
  
    
  }
  const handlesubmit = async(e)=>{

    e.preventDefault()
    const formdata = new FormData();
    formdata.append("brandName",fdata.brandName);
    formdata.append("productName",fdata.productName);
    formdata.append("price",fdata.price);
    formdata.append("selling",fdata.selling);
    formdata.append("category",fdata.category);
    formdata.append("image",image);
    try {
      const response = await axios.post("/api/products",formdata)
      console.log("sucess")
      toast.success("products added successfully")
      
      onClose()
    } catch (error) { 
      if(error.response){
        console.log("res",error.response.data)
      }else if(error.request){
        console.log("request",error.request)
      }
      else{
        console.log("err aws" ,error)
      }
    }
  }
  
  return (
    <div className='add-product'>
      <div className="top">
        <p>add product</p>
        <div onClick={onClose}>
        <FaTimes />
        </div>
      </div>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="productName">productName</label>
          <input type="text" placeholder='productname' id='productName' name='productName' value={fdata.productName} onChange={handleChange }/>
        </div>
        <div>
          <label htmlFor="brandName">brandName</label>
          <input type="text" placeholder='brandname' id='brandName' name='brandName' value={fdata.brandName}  onChange={handleChange }/>
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input type="text" placeholder='price' id='price' name='price' value={fdata.price}  onChange={handleChange }/>
        </div>
        <div>
          <label htmlFor="selling">selling</label>
          <input type="text" placeholder='selling' id='selling' name='selling' value={fdata.selling}  onChange={handleChange }/>
        </div>
        <div>
          <label htmlFor="category">category</label>
          <select name="category" id="category" value={fdata.category}  onChange={handleChange }>
              {
                productcategory.map((el,index)=>{
                  return (
                    <option value={el.value} key={el.value+index}>{el.value}</option>
                  )
                  
                })
              }
          </select>
        </div>
        <div className="div">
          <label htmlFor="productImage">productImage</label>
          <div className='uploadimg'>
            <label htmlFor="uploadImageInput">
              <FaCloudDownloadAlt />
              <input type="file" id='uploadImageInput' onChange={handleuploadImage}/>
              <p>upload image</p>
              </label>
          </div>
        </div>
        <div>
          <p>dfff</p>
          <img src="" alt="" width={100} height={100} onChange={uploadimage}/>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  ) 
}

export default addproduct
