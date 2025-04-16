import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { removeFromCart, updateCartQuantity, clearCart } from "../store/cart";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const { total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity less than 1
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <img src={item.imageUrl} alt={item.brandName} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.brandName}</p>
                <p className="cart-item-price">${item.selling}</p>
              </div>
              <div className="cart-item-quantity">
                <button
                  onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                  className="quantity-button"
                >
                  <FaMinus />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                  className="quantity-button"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="cart-item-subtotal">
                <p>Subtotal: ${item.selling * item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="remove-button"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h4>Total: ${total}</h4>
        <button onClick={() => dispatch(clearCart())} className="clear-cart-button">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;