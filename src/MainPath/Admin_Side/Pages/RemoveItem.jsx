import React from 'react'
import clk from './imgpage/clk.jpg'

const data = [
    { INUM: "T-001-228-8", ItemName: "Handmade cup", OrderDate: "2023-1-10", Quantity: 1, CName: "Chathurani", M_num: "070-888-9995",Status:"Deliverd"  },
    { INUM: "T-001-228-6", ItemName: "Photo Mugs", OrderDate: "2023-2-10",  Quantity: 2, CName: "Dishan", M_num: "071-569-8894",Status:"Deliverd"  },
    { INUM: "T-001-228-8", ItemName: "Custom Mouse Pads", OrderDate: "2023-1-20",  Quantity: 4, CName: "chathura", M_num: "075-888-9979",Status:"Cansel"  },
    { INUM: "T-001-228-8", ItemName: "Handmade cup", OrderDate: "2023-1-19", CName: "Hex",  Quantity: 4, M_num: "070-888-9649",Status:"Deliverd" },
  ]
  
const RemoveItem = () => {

    return (
        <div>
            <div className='pt-20 p-1'>
                <div class="relative overflow-x-auto shadow-md rounded-sm">
                    <table class="w-full text-sm text-left text-gray-500  dark:text-gray-400">
                        <thead class="text-xs  uppercase   bg-gray-800 text-white ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product Code
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Button
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => {
                                return(
                                    <tr class="bg-white border-b text-gray-700 font-medium hover:bg-gray-100 ">
                                    <th scope="row" class="px-6 py-4 font-mediu whitespace-nowrap text-gray-800">
                                        {val.INUM}
                                    </th>
                                    <td class="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td class="px-6 py-4">
                                        <img src={clk} className="h-24 p-1 rounded-md " />
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <button className='bg-red-500 rounded-md w-16 h-8 text-white'>Remove</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RemoveItem