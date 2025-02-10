import axios from 'axios'
import React, { useState } from 'react'

function forgotpassword() {
  const [email,setemail] = useState("")
 
  const handleChange = async (e) => {
    const { name, value } = e.target

    setemail((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/forgot-password",email)
      console.log(res.error)
    } catch (error) {
      console.log(error)
    }
  }
console.log(email)
  return (
    <div className='resetpassword'>
        <form action="">
            <div>
              <p>forgotten your password?</p>

            </div>
            
            <div>
                <label htmlFor="">enter your email</label>
                <input type="email" name='email' onChange={handleChange}  />
            </div>
            <button onClick={handlesubmit}>Reset</button>
        </form>
    </div>
  )
}

export default forgotpassword
