import React, { useState } from 'react'

import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import data from '../files/file';
import './home.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from "../store/cart"
import { setUserdetails,fetchproducts} from "../store/slice"
import { toast } from 'react-toastify'
const card = ({category, searchQuery}) => {
//    const [selectedCategory,setselectedCategory] = useState("all")
    const dispatch = useDispatch()
    
    const {products} = useSelector(state => state?.user)
    const handleAddToCart = ()=>{
        dispatch(addToCart(product))
        toast.success("added to cart sucessful")
      }
      let filterProduct = category === "all" ? products : products.filter((product)=>product.category === category);
      if(searchQuery){
            filterProduct = filterProduct.filter((product)=>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
  return (
    <div className='card-ori'>
            {filterProduct.map((product) => (
                    <div className="cont shadow" key={product._id}>
                    <div className="img">
                        
                        <img src={product.imageUrl} alt="" width={"50px"} />
                    </div>
                    <div className="write-up">
                        <p>{product.productName}</p>
                        <p></p>
                        <div>
                            <small>original</small>
                            <small>new</small>

                        </div>
                        <div>
                        <small>{product.price}</small>
                        <small>{product.selling}</small>
                        </div>
                        <Link to={`/product/${product._id}`}>read more</Link>
                        <div className='add'>
                            
                            <button className='btn-add' onClick={()=>dispatch(addToCart(product))}>add to cart</button>
                        </div>
                    </div>
                </div>
            ))
                
            }
            
        </div>
   
  )
}

export default card
