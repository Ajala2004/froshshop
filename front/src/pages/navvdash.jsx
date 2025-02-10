import React from 'react'
import { Link } from 'react-router-dom'
const navvdash = () => {
  return (
    <div>
        <div className='Navdash'> 
           <p>Welcome Admin</p>
                <Link to={"/dashboard/manageproduct"}><p>Orders</p></Link>
                <Link to={"/dashboard/manageorders"}><p>users</p></Link>
                <Link to={"/dashboard/registerusers"}><p>online users</p></Link>
                <Link><p>register users</p></Link>
                <Link ><p>manage product</p></Link>
                <button>logout</button>
        </div>
    </div>
  )
}

export default navvdash
