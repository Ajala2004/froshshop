import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './productdetails.css';

function ProductDetails() {
    const { products } = useSelector(state => state?.user);
    const { _id } = useParams();
    const datas = products.find((p) => p._id === _id);

    if (!datas) {
        return <h3>Not Found</h3>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="btn-back">
                <Link to={"/"}>Home</Link>
            </div>
            <div className="ProductDetails" key={datas._id}>
                <div className="image">
                    <img src={datas.imageUrl} alt={datas.brandName} />
                </div>
                <div className="write-up">
                    <h4>{datas.brandName}</h4>
                    <div className="price">
                        <p className='new-price'>${datas.price}</p>
                        <p className='old-price'>${datas.selling}</p>
                    </div>
                    <p>{datas.write}</p>
                    <button className='btn btn-danger'>Add to Cart</button>
                </div>
            </div>
        </motion.div>
    );
}

export default ProductDetails;