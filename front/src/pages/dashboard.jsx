import React from 'react'
import './dashboard.css'
import Navvdash from './navvdash'
import Manageproduct from './dashboard/manageproduct'
import Manageorders from './dashboard/manageorders'
import Registerusers from './dashboard/registerUsers'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

const dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="navvdash">
          <Navvdash />
      </div>
        <Routes>
          
            
              <Route path='manageproduct' element={<Manageproduct />} />
              <Route path='manageorders' element={<Manageorders />} />
              <Route path='registerusers' element={< Registerusers />} />
                                      
              
         
          
        </Routes>
        
    </div>
  )
}

export default dashboard
