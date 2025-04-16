import React from 'react';
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../store/cart";
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import "./card.css"

const Card = ({ category, searchQuery }) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state?.user);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Added to cart successfully");
    };

    let filterProduct = category === "all" ? products : products.filter((product) => product.category === category);
    if (searchQuery) {
        filterProduct = filterProduct.filter((product) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className='card-ori'>
            {filterProduct.map((product) => (
                <motion.div
                    className="cont shadow"
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="img">
                        <img src={product.imageUrl} alt={product.productName} />
                    </div>
                    <div className="write-up">
                        <p>{product.productName}</p>
                        <div>
                            <small>Original</small>
                            <small>New</small>
                        </div>
                        <div>
                            <small>${product.price}</small>
                            <small>${product.selling}</small>
                        </div>
                        <Link to={`/product/${product._id}`}>Read More</Link>
                        <div className='add'>
                            <button className='btn-add' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Card;