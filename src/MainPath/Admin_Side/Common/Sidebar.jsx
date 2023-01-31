import React from 'react'
import { MdBorderColor } from 'react-icons/md';
import { MdAddCircle } from 'react-icons/md';
import { MdRemoveCircle } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoReorderFourSharp } from 'react-icons/io5';
import { AiTwotoneShop } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
// import ItemGallery from '../Pages/ItemGallery';
import AddItem from '../Pages/AddItem';
import WelcomNav from './WelcomNav';
import App from './Table';
import Table from './Table';
// import Smtable from '../Pages/Smtable';
import RemoveItem from '../Pages/RemoveItem';
import MyShop from '../Pages/MyShop';
import ImgReplace from './ImgReplace';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import ManageOdr from '../Pages/ManageOdr';
import TableFilter from '../Pages/TableFilter';



const Sidebar = () => {
  return (
    <div>

      <div class="flex h-screen">
        <div class="px-4 py-2  bg-indigo-600 lg:w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline w-8 h-8 text-white lg:hidden" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <IoReorderFourSharp />
          </svg>
          <div class="hidden lg:block">
            <div class="my-2 mb-6">
              <h1 class="text-2xl font-bold text-white pl-8 ">Admin Dashboard </h1>
            </div>
            <ul>

              <li class="mb-6">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" class="p-1 focus:outline-none">
                      <AiOutlineSearch />
                    </button>
                  </span>
                  <input type="search" name="search"
                    class="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search..." />
                </div>
              </li>

              <li class="mb-4 rounded hover:shadow hover:bg-gray-800">
                <Link to={"/"}><a href="#" class=" w-full h-full px-3 py-2 font-bold text-white flex">
                  <AiOutlineHome className='text-2xl' />&nbsp;
                  Home
                </a></Link>
              </li>

              <li class="mb-4 hover:bg-gray-800 rounded hover:shadow">
                <Link to={"MyShop"}> <a href="#" class=" w-full h-full px-3 py-2 font-bold text-white flex">

                  <AiTwotoneShop className='text-2xl' />&nbsp;

                  My Shop
                </a></Link>

              </li>

              <li class="mb-4 hover:shadow hover:bg-gray-800 rounded ">
                <Link to={"ManageOrder"}><a href="#" class=" w-full h-full px-3 py-2 font-bold text-white flex">

                  <MdBorderColor className='text-xl' />&nbsp;

                  Manage Order
                </a></Link>
              </li>


              <li class="mb-4 rounded hover:shadow hover:bg-gray-800 ">
                <Link to={"AddItem"}> <a href="#" class=" w-full h-full px-3 py-2 font-bold text-white flex">
                  <MdAddCircle className='text-2xl ' /> &nbsp;
                  AddItem
                </a></Link>

              </li>

              <li class="mb-4 rounded hover:shadow hover:bg-gray-800 ">
                <Link to={"RemoveItem"}><a href="#" class=" w-full h-full px-3 py-2 font-bold text-white flex">
                  <MdRemoveCircle className='text-2xl' />&nbsp;
                  Remove Item
                </a></Link>

              </li>

              <li className='pt-52   '>

              </li>




            </ul>
            <div className='pl-16 pt-14 '>
              <a href="#_" class=" hover:scale-105 ease-in duration-300   inline-flex items-center justify-center h-8 p-6 text-xl font-semibold text-center   align-middle   bg-transparent border-2 border-solid rounded-lg cursor-pointer text-white border-white  ">
                Sign Out
              </a>
            </div>
          </div>

        </div>


        <div class="w-full   overflow-hidden lg:w-full">
          <div className='absolute mr-10'>< WelcomNav /> </div>
        
        
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="MyShop" element={<MyShop />} />
            <Route path="ManageOrder" element={<ManageOdr />} />
            <Route path="AddItem" element={<AddItem />} />
            <Route path="RemoveItem" element={<RemoveItem />} />
         </Routes>
 
          


          {/*<div className='pt-48'>
            <TableFilter />

  </div>*/}





        </div>

      </div>

    </div>
  )
}

export default Sidebar