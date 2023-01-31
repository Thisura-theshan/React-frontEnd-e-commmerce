import React from 'react'
import { Link } from 'react-router-dom'
import assets2 from '../Pages/assets/showitem2.webp'

const ItemCart = () => {
    return (
        <div>
            <div className=" w-64 rounded-lg shadow-xl bg-white border-gray-200">

                <img src={assets2} className=" h-64 w-64  rounded-b-none rounded-lg" />


                <div className=" pl-2 p-1">
                    <div className="flex items-center justify-between  pt-1">
                        <p className="text-base pt-5 font-black leading-none text-gray-800">Hand Made Role</p>

                    </div>

                    <p className="text-xs leading-3 text-gray-600 py-3">Color: mix</p>
                    <p className="w-96 text-xs leading-3 text-gray-600">Materials: 100% Card board</p>
                    <div className="flex items-center  pt-5 ">
                       <Link to={'/CheckOut'} ><button className="bg-gray-500 p-2 rounded-md text-white mr-20">Add to Cart </button></Link>
                        <p className="text-base font-black leading-none text-gray-900 ">$9,000</p>

                    </div>
                </div>

                <div className='pt-1'>

                </div>


            </div>
        
    </div >
  )
}

export default ItemCart