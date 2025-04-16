import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Context from '../context';
import './nav.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ROLE from '../component/role';
import { toast } from 'react-toastify';
import { setUserdetails } from '../store/slice';

function Nav() {
  const navigate = useNavigate();
  const { fetchuserDetails } = useContext(Context);
  const dispatch = useDispatch();
  const [adminpop, setAdminpop] = useState(false);
  const user = useSelector(state => state?.user?.user);

  const handleLogout = async () => {
    try {
      const fetchData = await axios.get("/api/logout");
      if (fetchData) {
        toast.success("Logged out successfully");
        dispatch(setUserdetails(null));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className='navbar'>
      <div className="navbar-brand">
        <Link to={"/"}>
          <img src="/public/online-shopping.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className='search-bar'>
        <input type="text" placeholder="Search products..." />
        <button className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div className="navbar-right">
        {user?._id ? (
          <>
            <div className="user-profile" onClick={() => setAdminpop(!adminpop)}>
              {user?.profilepic ? (
                <img src={user?.profilepic} alt="Profile" className="profile-pic" />
              ) : (
                <FaCircleUser className="profile-icon" />
              )}
              {adminpop && (
                <div className="admin-popup">
                  {user?.role === ROLE.ADMIN && (
                    <Link to={'/adminpanel'}>Admin Panel</Link>
                  )}
                </div>
              )}
            </div>
            <Link to={"/cart"} className="cart-link">
              <FaCartShopping className="cart-icon" />
              <span className="cart-count">0</span>
            </Link>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="login-button">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;