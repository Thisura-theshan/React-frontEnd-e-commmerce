import React from 'react'
import { Link } from 'react-router-dom'

export const OffCanves = () => {
    return (
        <div>
            <div className='bg-black '>

                <div className='pr-44 pl-40'>

                    <ul className="flex items-end justify-end p-3 ">


                        <p className='text-white pr-[870px]' >Welcome </p>
                        <li className="mr-6">
                           <Link to={"/SignCheck"}> <a className="text-white hover:text-blue-800 " href="#" >SIGN&nbsp;IN</a>  </Link> 
                        </li>
                        <li className="mr-6">
                            <a className="text-white hover:text-blue-800" href="#">FAQS</a>
                        </li>
                        <li className="mr-6">
                            <div >
                                <select className='rounded-md'>
                                    <option value="0">USD</option>
                                    <option value="0">EUR</option>
                                    <option value="0">USD</option>

                                </select>
                            </div>
                        </li>

                    </ul>


                </div>

            </div>
        </div>
    )
}
