import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom';
import './login.css'
import { useNavigate } from 'react-router-dom';
import  'react-toastify/dist/ReactToastify.css'
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { setUserdetails,fetchproducts,hideLoading,showLoading } from "../store/slice"
import { IoMdCart } from "react-icons/io";
import imageTobase64 from '../component/tobase64';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
  
 


const signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showpassword, setshowPassword] = useState(true)
    const [confirmpassword, setconfirmpassword] = useState(true)
    const [formdata, setformdata] = useState({
        name: "", 
        email: "",
        password: "",
        confirmpassword: "",
        profilepic:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target

        setformdata((prev) => { 
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleimageUpload = async (e) => {
        const file = e.target.files[0]
        const imagepic = await imageTobase64(file)
        setformdata((prev) => {
            return {
                ...prev,
                profilepic: imagepic
            }
        })
    } 
    const handlesignup = async (e) => {
        e.preventDefault()
        try { 
            dispatch(showLoading(true))
            const response = await axios.post("/api/signup", formdata)
            dispatch(hideLoading())
            if (formdata.password == formdata.confirmpassword) {
                if(response.data){
                    navigate('/login')
                    toast.success(response.data.message)
                    
                    
                }if(response.data.error){ 
                    toast.error(response.data.message)  
                }
                else { 
                    toast.error(response.data.message) 
                }
                 
            }else {
                toast.error("password does not match")
            }
           
        } catch (error) {
            toast.error("email already exist")
        } 
    } 
    
    return (
        <form className='login signup'>
           
            <div className="profile">
                <label htmlFor="profile">
                    <img src={formdata.profilepic || `/public/contact.png`} alt="" />
                    <input type="file" id='profile' onInput={handleimageUpload} name='profilepic'/>
                </label>
            </div>
            <div>
                <label htmlFor="">Full name</label>
                <input type="text" 
                
                required
                name='name'
                onChange={handleChange}
                 /> 
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    required
                    name='email'
                    onChange={handleChange}
                />
            </div>
            <ToastContainer />
            <div className='span'>
                <label htmlFor="">password</label>
                <input
                    type={showpassword ? "text" : "password"}
                    name='password'
                    onChange={handleChange}
                />
                <span onClick={() => {
                    setshowPassword(pre => !pre)
                }}>
                    {
                        showpassword ? (<FaEye />) :
                            (<FaEyeLowVision />)
                    }
                </span>
            </div>
            <div className='span'>
                <label htmlFor="">Confirm password</label>
                <input
                    type={confirmpassword ? "text" : "password"}
                    name='confirmpassword'
                    onChange={handleChange}
                />
                <span onClick={() => {
                    setconfirmpassword(prev => !prev)
                }}>
                    {
                        confirmpassword ? (<FaEye />) :
                            (<FaEyeLowVision />)
                    }
                </span>
            </div>
            <div className='button'>
                <button onClick={handlesignup}>sign up</button><br />

            </div>
            <div>
                <p>Does not have an account?<Link to={'/signup'} >Sign up</Link></p>
            </div>
        </form>
    )
}

export default signup 
