import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../files/file'
import { Link } from 'react-router-dom'
import './productdetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { setUserdetails,fetchproducts} from "../store/slice"
function ProductDetails() {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state?.user)
    const { _id } = useParams();
    const datas = products.find((p)=> 
        p._id == _id,
        console.log("id",_id)
    );
    
    if(!datas) {
        return <h3>not found</h3>
    }
    return (
        
               <div >
                    <div className="btn-back">
                        <Link to={"/"}>home</Link>
                        <span></span>
                    </div>
                     <div className="ProductDetails" key={datas._id}>
                        <div className="image">
                            <div >
                                
                                <img src={datas.imageUrl} alt="" width={"50px"} />
                            </div>
                            
                        </div>
                        <div className="write-up">
                            <h4>{datas.brandName}</h4>
                            <div className="price">
                                <p className='new-price'>{datas.price}</p>
                                <p className='old-price'>{datas.selling}</p>
                            </div>
                            <p>{datas.write}</p>
                            <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div> 
               </div>
        
    )
}

export default ProductDetails
