import React from 'react'
import SellProduct from '../Common/SellProduct'

const Home = () => {
  return (
    <div className='grid-cols-4 grid pl-4 pt-20 gap-y-10'>
      <SellProduct/> <SellProduct/> <SellProduct/> <SellProduct/>
      <SellProduct/> <SellProduct/> <SellProduct/> <SellProduct/>
      <SellProduct/> <SellProduct/> <SellProduct/> <SellProduct/>
    
    </div>
  )
}

export default Home