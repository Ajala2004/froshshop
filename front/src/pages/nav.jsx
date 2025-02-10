import React, { useContext, useEffect, useState } from 'react'
import Login from './login'
import { Link } from 'react-router-dom'
import Logo from '/public/online-shopping.png'
import Cart from '/public/shopping-cart.png'
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Context from '../context';
import './nav.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ROLE from '../component/role'
import { toast } from 'react-toastify'
import { setUserdetails } from '../store/slice'
function nav() {
  const navigate = useNavigate()
  const { fetchuserDetails } = useContext(Context)
  const dispatch = useDispatch()
  const [adminpop, setadminpop] = useState(false)
  const handlelogout = async () => {
    const fetchData = await axios.get("/api/logout")
    
    if (fetchData) {
      toast.success("ll")
 
      dispatch(setUserdetails(null))
     
      navigate("/")
      

    }
    if (fetchData.error) {
      toast.error(fetchData.message)

    }
  }
  const user = useSelector(state => state?.user?.user)

  return (
    <div className='nav navbar  p-0 m-0 shadow flex space-around'>
      <div className="navbar-brand">
        <Link to={"/"}><img src="/public/online-shopping.png" alt="" /></Link>
      </div>
      <div className='search'>
        <input type="text" className='' />
        <span>
          <FaSearch className='text-white' />
        </span>
      </div>
      <div className="right">
      {
        user?._id && (
          <div className='right'>

        <div className='right-inner' onClick={() => {
          setadminpop(prev => !prev)
        }}>
          {user?.profilepic ? (
            <img src={user?.profilepic} alt="d" />
          ) : (
            <FaCircleUser />
          )}
          {
            adminpop && (
              <div className="pop">
                {
                  user?.role === ROLE.ADMIN &&
                  <Link to={'/adminpanel'}>adminpanel</Link>
                }
               
              </div>
            )
          }

        </div>
       <Link to={"/cart"}>
       <p className='cart'>
          <FaCartShopping className='w-40 m-0' />
          <span>
            0
          </span>
        </p>
       </Link>
        

      </div>
        )
      }
      {
          user?._id ? (
            <button className='btn bg-danger text-light w-50px' onClick={handlelogout}>logout</button>
          ) : (
            <Link to={"/login"} >
              <button className='btn bg-danger text-light w-50px' id='btn'>Login</button>
            </Link>
          )

        }
      </div>
    </div>
  )
}

export default nav
