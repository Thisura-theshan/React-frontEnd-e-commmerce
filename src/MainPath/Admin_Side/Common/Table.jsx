import React, { useState } from 'react'

const data = [
  { id: 1, INUM: "T-001-228-8", ItemName: "Handmade cup", OrderDate: "2023-1-10", Quantity: 1, CName: "Chathurani", M_num: "070-888-9995", Status: "Deliverd" },
  { id: 2, INUM: "T-001-228-8", ItemName: "Photo Mugs", OrderDate: "2023-2-10", Quantity: 2, CName: "Dishan", M_num: "071-569-8894", Status: "Deliverd" },
  { id: 3, INUM: "T-001-228-8", ItemName: "Custom Mouse Pads", OrderDate: "2023-1-20", Quantity: 4, CName: "chathura", M_num: "075-888-9979", Status: "Cansel" },
  { id: 4, INUM: "T-001-228-8", ItemName: "Handmade cup", OrderDate: "2023-1-19", Quantity: 4,CName: "Hex",  M_num: "070-888-9649", Status: "Deliverd" },
]

const Table = () => {


  const [search, setSearch] = useState('')
  console.log(search);

  return (
    <div>

      <div class="pl-2 pt-24
            bg-white-700">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input onChange={(e) => setSearch(e.target.value)} type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md w-80  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
      </div>

      <div class=" p-2 pt-4  shadow-md ">
        <div class="w-[1200px] ">

          <table class="min-w-full text-center ">
            <thead class="border-b bg-gray-800 text-sm ">

              <tr className=''>
                <th scope="" class=" font-medium text-white ">
                  Item Numbers
                </th>
                <th scope="" class=" font-medium text-white ">
                  Item Name
                </th>
                <th scope="" class=" font-medium text-white">
                  Order Date
                </th>
                <th scope="" class=" font-medium text-white ">
                  Phone Number
                </th>
                <th scope="" class=" font-medium text-white ">
                  Quantity
                </th>
                <th scope="" class=" font-medium text-white px-6 py-4">
                  Status
                </th>
                <th scope="" class=" font-medium text-white px-6 py-4">
                  Customer Name
                </th>

              </tr>

            </thead>
            <tbody>

              {data.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.CName.toLowerCase().includes(search);
              }).map((item) => (
                <tr class="hover:bg-gray-200  border-b " key={item.id} >
                  <td class="  whitespace-nowrap text-sm font-medium text-gray-900">{item.INUM}</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.ItemName}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.OrderDate}
                  </td>
                  <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                    {item.M_num}
                  </td>
                  <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                    {item.Quantity}
                  </td>
                  <td class="text-sm text-white font-light  whitespace-nowrap">
                    <button className='bg-green-400 rounded-sm p-2 w-20'>{item.Status}</button>

                  </td>
                  <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                    {item.CName}
                  </td>
                </tr >
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  )
}

export default Table
