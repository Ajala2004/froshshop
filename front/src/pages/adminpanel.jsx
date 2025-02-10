import React, { useEffect } from 'react'
import { FaCartShopping, FaCircleUser, FaEyeLowVision } from "react-icons/fa6";
import "./adminpanel.css"
import { useSelector } from 'react-redux'
import { Link,Outlet, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import Allusers from './allusers';
import Allproduct from './allproduct';
import ROLE from '../component/role';
function adminpanel() {
  const navigate = useNavigate()
    const user = useSelector(state => state?.user?.user)
    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
          navigate("/") 
        }
    },[user])
    return (
    
    <div className='adminpanel'>
        <aside>
        <div className='right-inner' > 
                { user?.profilepic ? (
                  <img src={user?.profilepic} alt="d" />
                ):(
                  <FaCircleUser  />
                )}
                <h6>{user?.name}</h6>
                <p>{user?.role}</p>
                 
                
              </div>

              
        </aside>
        <Tabs defaultActiveKey="1" >
        <TabPane tab="All Users" key="1">
           <Allusers />
          </TabPane>
          <TabPane tab="Add Product" key="2">
            <Allproduct />
          </TabPane>
          
        </Tabs>
    </div>
  )
}

export default adminpanel
