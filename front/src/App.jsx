import { useEffect, useState } from 'react'
import Allusers from './pages/allusers'
import Allproduct from './pages/allproduct'
import './App.css'
import Footer from './component/footer'
import Loading from './component/loading'
import Nav from './pages/nav'
import Signup from './pages/signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ProductDetails from './pages/ProductDetails'
import Resetpassword from './component/resetpassword'
import Forgotpassword from './component/forgotpassword'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import "react-toastify"
import { ToastContainer } from 'react-toastify'
import { Toast } from 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import Context from './context'
import Cart  from './pages/cart'
import { useDispatch, useSelector } from 'react-redux'
import { setUserdetails,fetchproducts,hideLoading,showLoading } from "./store/slice"
import Adminpanel from './pages/adminpanel'
function App() {
  const {loading} = useSelector(state => state?.user)
  const dispatch = useDispatch()
  const fetchuserDetails = async () => {
    dispatch(showLoading(true))
    const dataresponse = await axios.get("/api/user-details")
    // const dataApi = await dataresponse.json()
    dispatch(hideLoading())
    console.log(dataresponse)
    if(dataresponse){  
      dispatch(setUserdetails(dataresponse.data))
      console.log("hjj",)
    }  
  }
  useEffect(() => {
    fetchuserDetails()
  }, [])

  //fetch products
  const fetchallproducts = async () =>{
    try {
      dispatch(showLoading(true))
      const response = await axios.get("/api/allproduct");
      dispatch(hideLoading())
      if(response.data.sucess){
        dispatch(fetchproducts(response.data.data))
        
        console.log("all2",response.data.data)
      }else{
        console.log("error loading products")
      }
    } catch (error) {
      console.log("p-error",error)
    }
  }
  useEffect(() => {
    fetchallproducts()
  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchuserDetails
      }}>
        <div className="body">

          <BrowserRouter>
            <Nav />
            <ToastContainer />
            {loading ? <Loading /> : null}
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/login' Component={Login} />
              <Route path='/signup' Component={Signup} />
              <Route path='/product/:_id' element={<ProductDetails />} />
              <Route path='/adminpanel' element={<Adminpanel />} />
              <Route path='/alluser' element={<Allusers />} />
              <Route path='/allproduct' element={<Allproduct />} />
              <Route path='/cart' Component={Cart} />
              <Route path='/forgot-password' element={<Forgotpassword />} />
              <Route path='/reset-password:token' element={<Resetpassword/>} />
            </Routes>
            <Footer />

          </BrowserRouter>
        </div>

      </Context.Provider>
    </>
  )
}

export default App
