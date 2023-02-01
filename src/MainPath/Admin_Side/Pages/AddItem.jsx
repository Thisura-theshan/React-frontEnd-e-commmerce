import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ImgInput from '../Common/ImgInput'

const AddItem = () => {

  const [newTask, setNewTask] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewTask(
      { ...newTask, [event.target.name]: event.target.value }
    )
    console.log(newTask);
  }
  const saveTask = async () => {
    
    await axios.post("23.22.48.216:5000", newTask)
    .then(res=> console.log(res))
    .catch(err => console.log(err))
  }



  return (
    <div>
      <div className="w-full max-w-lg pl-4 pt-16" >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Item Name
            </label>
            <input onChange={handleChange} name="ItemName" className="appearance-none block w-full bg-gray-100  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pencil" />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Item Number
            </label>
            <input onChange={handleChange} name="ItemNumber" className="appearance-none block w-full bg-gray-100  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="E124-620-F01" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Description
            </label>
            <textarea onChange={handleChange} name="Description" className="appearance-none block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" cols="40" id="grid-password" type="text" placeholder="This Item Is. . ." />

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Item Qunatity
            </label>
            <input onChange={handleChange} name="ItemQuentity" className="  w-full text-gray-700 border bg-gray-100 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="10" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Item Price
            </label>
            <div class="relative">
              <input name='ItemPrice' onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="$100" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Item Material
            </label>
            <input onChange={handleChange} name="ItemMatireal" className="appearance-none  bg-gray-100 block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Card Board" />
          </div>
        </div>

        {/**Add an image Feild */}

        <div className='mb-10'></div>

        <ImgInput />



        {/**----- -------------------------------------------- */}
        <div className='mb-4'></div>

        <div className=''>
          <button type='button' onClick={() => { saveTask() }} className="bg-indigo-600 w-24  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>



      </div>

    </div>
  )
}

export default AddItem