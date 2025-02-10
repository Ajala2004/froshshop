import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function resetpassword() {
  const {token} = useParams()
  const [password,setpassword] = useState("")
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/reset-password/${token}`,{})
      console.log(" done")
    } catch (error) {
      console.log("done")
    }
  }
  const handleChange = async (e) => { 
    const { name, value } = e.target

    setpassword((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
console.log(password)
  return (
    <div className='resetpassword'>
        <form action="">
            <div>
              <p>reset your password</p>

            </div>
            <div>
                <label htmlFor="" >New Password</label>
                <input type="password" name='newpassword' onChange={handleChange} value={resetpassword.newpassword}/>
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name='confirmnewpassword' onChange={handleChange} value={resetpassword.confirmnewpassword} />
            </div>
            <button>Reset</button>
        </form>
    </div>
  )
}

export default resetpassword
