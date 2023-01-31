import React from 'react'
import ImgInput from '../Common/ImgInput'

const AddItem = () => {
  return (
    <div>
      <form class="w-full max-w-lg pl-4 pt-16">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Item Name
            </label>
            <input class="appearance-none block w-full bg-gray-100  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pencil" />

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Item Number
            </label>
            <input class="appearance-none block w-full bg-gray-100  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="E124-620-F01" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Description
            </label>
            <textarea class="appearance-none block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" cols="40" id="grid-password" type="text" placeholder="This Item Is. . ." />

          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Item Qunatity
            </label>
            <input class="  w-full text-gray-700 border bg-gray-100 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="10" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Item Price
            </label>
            <div class="relative">
              <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="$100" />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Item Material
            </label>
            <input class="appearance-none  bg-gray-100 block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Card Board" />
          </div>
        </div>

        {/**Add an image Feild */}

        <div className='mb-10'></div>

        <ImgInput />



        {/**----- -------------------------------------------- */}
        <div className='mb-4'></div>

        <div className=''><button class="bg-indigo-600 w-24  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button></div>



      </form>

    </div>
  )
}

export default AddItem