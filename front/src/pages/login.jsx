import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Context from '../context';
import { useNavigate } from 'react-router-dom';
import { setUserdetails,fetchproducts,hideLoading,showLoading } from "../store/slice"
const login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {fetchuserDetails} = useContext(Context)
 
  const [showpassword, setshowPassword] = useState(true)
  const [fdata, setfdata] = useState({
    email: "",
    password: "" 
  })

  const handleChange = async (e) => {
    const { name, value } = e.target

    setfdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signin", fdata)
      if (response.data.sucess) {
        dispatch(showLoading(true))
        const response = await axios.post("/api/signin", fdata)
        dispatch(hideLoading())
        toast.success("login sucess")
        navigate('/')
        console.log(response.sucess)  
        fetchuserDetails()
      }   
      if (response.error){ 
        toast.error("something wrong")  
        dispatch(hideLoading())
      }  
      
    } catch (error) { 
      toast.error("connection error, please check password and email")   
      dispatch(hideLoading()) 
    } 
  } 
  
  return (
    <div className='login'>
      <div className="profile">
        <FaCircleUser />
      </div>
      <form action="" className='login'>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"

            name='email'
            value={fdata.email}
            onChange={handleChange}

          />
        </div>
        <div className='span'>
          <label htmlFor="">password</label>
          <input
            type={showpassword ? "text" : "password"}
            name='password'

            onChange={handleChange}
            value={fdata.password}
          />
          <span onClick={() => {
            setshowPassword(prev => !prev)
          }}>
            {
              showpassword ? (<FaEye />) :
                (<FaEyeLowVision />)
            }
          </span>
        </div>
        <div className='button' >
          <button  onClick={handlelogin}>Login</button><br />

        </div>
        <div>
          <p>Does not have an account?<Link to={'/signup'} >Sign up</Link></p>
          <p>forgot password?<Link to={'/forgot-password'} >recover</Link></p>
        </div>
      </form>
    </div>
  )
}

export default login
