import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./cart.css"
import { FaTrash,FaMinus,FaPlus} from "react-icons/fa";
import { removeFromCart,updateCartQuantity,clearCart} from "../store/cart"
const cart = () => {
  const handleQuantityChange = (id,
    quantity) => {
    if (quantity < 1) return;
    
   // Prevent quantity less than 1
    dispatch(updateCartQuantity({ id,
    quantity  }));
    }    
  const cartitems = useSelector((state)=>state.cart.cart)
  const {total} =useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>shopping cart</h2>
        { 
          cartitems === 0 ? (
            <p>your cart is empty</p>
          ):(
            <div>
              {
                (cartitems || []).map((item) => (
                  <div >
                      <div className="cart-div">
                      <img src={item.imageUrl} alt=""/>
                     <p>{item.brandName}</p>
                     <p>{item.selling}</p>
                    
                  
                 
                    <button onClick={()=>handleQuantityChange(item._id, item.quantity + 1)}><FaPlus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>handleQuantityChange(item._id, item.quantity - 1)}><FaMinus/></button>
                    <p  onClick={()=> dispatch(removeFromCart(item._id))} ><FaTrash/> </p>
                    <p>subtotal: ${item.selling * item.quantity}</p>
                      </div>
                      
                    </div>
              )) }
            </div>
          )
        }
        <div className="total-price">
                          <h4>
                            total:{total}
                          </h4>
                          <button onClick={()=>
                            dispatch(clearCart())
                          }>
                            clearCart
                          </button>
                      </div>
    </div>
  )
}

export default cart
