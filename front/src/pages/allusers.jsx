import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import Changeuserrole from '../component/Changeuserrole';
import { ToastContainer, toast } from 'react-toastify'
import "./adminpanel.css"
 
function allusers() {
  const [alluserr, setalluserr] = useState([])
 
  const[updateuserdetails,setupdateuserdetails] =useState({
    email:"",
    name:"",
    role:"",
    _id:""
  })
  const[openUpdaterole,setopenUpdaterole] = useState(false)
  const fetchallusers = async () => {
    const dataresponse = await axios.get("/api/allusers")
    const all = await dataresponse.data.data
    console.log("all",all)
    if (all) {
      setalluserr(all)
    }
    if (dataresponse.error) {
      toast.error(dataresponse.message)
    }
  }
  const toggledisplayuser = (userId,currentStatus) =>{
    const res = axios.patch(`/api/allusers/${userId,currentStatus}`, {disabled: !currentStatus})
    if(res){
        setalluserr(alluserr.map(user=>

          user._id === userId? {...user, disabled: !currentStatus}:
          user
        ))
    }
    
  }
  useEffect(() => {
    fetchallusers()
  }, [])
  return (
    <div className='allusers'>
      <table className='usertable'>
        <thead >
          <tr>
            <th>s/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
            <th>created date</th>
            <th>action</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>

          {
             alluserr.map((all, index) => {
                return(
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{all.name}</td>
                    <td>{all.email}</td>
                    <td>{all.role}</td>
                    
                   
                    <td>{all.createdAt}</td>
                  <td>
                    <button onClick={()=>{
                      setupdateuserdetails(all)
                      setopenUpdaterole(true)}}>
                        <FaEdit color='white' />
                    </button>
                  </td>
                  <td>{alluserr.disabled?"enable":"disable"}</td>
                  </tr>
              
            )})
           
          }
        </tbody>
      </table>
     {
      openUpdaterole &&(
        <Changeuserrole 
        onClose={()=>setopenUpdaterole(false)}
        name={updateuserdetails.name}
        email={updateuserdetails.email}   
        role={updateuserdetails.role}
        userId={updateuserdetails._id}
        callfunction={fetchallusers}
        />
        
      )
     }
    
       
     
    </div>
  )
}

export default allusers

