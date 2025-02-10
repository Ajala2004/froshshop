import React, { useState } from 'react'
import ROLE from './role'
import { FaTimes } from "react-icons/fa";
import "./component.css"

import axios from 'axios';
import { toast } from 'react-toastify';
function Changeuserrole({
    name,
    email,
    role,
    onClose,
    userId,
    callfunction
}) {
    console.log(role)
    const [userrole, setuserrole] = useState(role)

    const handleonsubmit = (e) => {
        setuserrole(e.target.value)
        console.log(e.target.value)
    }

    const UpdateUserRole = async () => {
        const datares = await axios.post("/api/updateuser", {userId,role : userrole})
        if(datares){
            toast.success("hh")
            onClose()
            callfunction()
        }else{
            toast.error("er")
        }
        
    }
    return (
        <div className='Changeuserrole'>

            <div className="div">
                <div onClick={onClose} className='times'>


                    <p>change user role</p>
                    <FaTimes />
                </div>

                <p>name: {name}</p>
                <p>EMAIL: {email}</p>
                <div className="btnC">
                    <select name="" id="" onChange={handleonsubmit} value={userrole}>
                        {
                            Object.values(ROLE).map((el, index) => {
                                return (
                                    <option value={el} key={el}>{el}</option>
                                )
                            })
                        }
                    </select> 
                    <button onClick={UpdateUserRole}>change role</button>
                </div>
            </div>
        </div>
    )
}

export default Changeuserrole
