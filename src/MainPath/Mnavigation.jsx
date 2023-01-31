import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Sidebar from './Admin_Side/Common/Sidebar'
import RegisterPage from './Clint_Side/common/RegisterPage'
import SignIn from './Clint_Side/common/SignIn'
import HomePage from './Clint_Side/Pages/HomePage'
import AboutUs from './Clint_Side/Pages/SubPages/AboutUs'
import CheckOut from './Clint_Side/Pages/SubPages/CheckOut'
import Shopping from './Clint_Side/Pages/SubPages/Shopping'
import SignCheck from './Clint_Side/Pages/SubPages/SignCheck'


const Mnavigation = () => {
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
          <Route path='/Sidebar/*' element={ <Sidebar/>} /> 
                
       </Routes>
      
    </div>
  )
}

export default Mnavigation