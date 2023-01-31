import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import RegisterPage from '../common/RegisterPage'
import SignIn from '../common/SignIn'
import HomePage from './HomePage'
import AboutUs from './SubPages/AboutUs'
import CheckOut from './SubPages/CheckOut'
import Shopping from './SubPages/Shopping'
import SignCheck from './SubPages/SignCheck'





const Navigation = () => {
  return (
   <div>
      <Routes>
          <Route path='/' element={<HomePage/>} />  
          <Route path='/AboutUs' element={<AboutUs/>} /> 
          <Route path='/Shopping' element={<Shopping/>} />  
          <Route path='/CheckOut' element={<CheckOut/>} />       
          <Route path='/SignCheck' element={<SignCheck/>} /> 
          <Route path='/SignIn' element={<SignIn/>} /> 
           <Route path='/RegisterPage' element={<RegisterPage/>} />  
      
       </Routes>
   </div>

    
  )
}

export default Navigation