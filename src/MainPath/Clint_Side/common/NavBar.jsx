import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            {/* Header Section Begin --*/}
            <div className=''>
                <ul className="flex justify-center p-6 text-xl font-normal font-sans decoration-2 bg-stone-50 pl-80">
                    <li className="mr-10 " >
                        <Link to={"/"}> <a className="text-zinc-800 hover:underline decoration-red-600  underline-offset-8   " href="#">Home</a></Link>


                    </li>

                 <Link to={"/Shopping"} >  <li className="mr-10">
                        <a className="text-zinc-800 hover:underline decoration-red-600  underline-offset-8 " href="#">Shop</a>


                    </li></Link>

                    <Link to={"/AboutUs"}><li className="mr-32">

                        <a className="text-zinc-800 hover:underline decoration-red-600  underline-offset-8 " >About Us</a>
                    </li></Link>


                    <li className='mr-10 pl'>
                        <input type="text" placeholder="Search.." name="search" className='outline-none text-lg' />
                        <button type="submit" className='text-2xl'> <FiSearch /></button>
                    </li>
                    <li className='mr-10'>
                        <button className='text-2xl text-red-700 ' >< AiOutlineHeart /></button>
                    </li>

                
                    <li className='mr-2'>
                        <Link to={'/CheckOut'}><button className='text-2xl'><BsFillCartCheckFill /></button></Link>
                        
                    </li>
                   <Link to={"/CheckOut"}> <li className='text-xl'>$0.00</li></Link>

                </ul>
            </div>

        </div>
    )
}

export default NavBar