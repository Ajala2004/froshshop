import React, { useState, useEffect } from 'react'
import "./adminpanel"
import "./allproduct.css"
import './home.css'
import Changeuserrole from '../component/Changeuserrole'
import Addproduct from '../component/addproduct'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserdetails,fetchproducts} from "../store/slice"

function allproduct() {
  const [openuploadproduct,setopenuploadproduct] = useState(false)
  // const [products,setproducts] = useState([])
  const dispatch = useDispatch()
  
  // const fetchallproducts = async () =>{
  //   try {
  //     const response = await axios.get("/api/allproduct");
  //     if(response.data.sucess){
  //       setproducts(response.data.data)
  //     }else{
  //       console.log("error loading products")
  //     }
  //   } catch (error) {
  //     console.log("p-error",error)
  //   }
  // }
  // useEffect(() => {
  //   fetchallproducts()
  // }, [])
 
  const {products} = useSelector(state => state?.user)
  console.log("allp",products)
  return (
    <div className='allproduct'>
      <div className="head">
        <p>all product</p>
        <button onClick={()=>{
          setopenuploadproduct((prev)=>!prev)
        }}>upload product</button>
      </div>
      <div className='card-ori'>
            {products.map((product) => (
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
                        
                        
                    </div>
                </div>
            ))
                
            }
            
        </div>
  
      {
        openuploadproduct && (
          <Addproduct onClose={()=>setopenuploadproduct(false)}/>
        )
      }
    </div>
  )
}

export default allproduct
