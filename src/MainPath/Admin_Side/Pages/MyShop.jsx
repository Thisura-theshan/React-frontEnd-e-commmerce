import React from 'react'
import { BiEdit } from 'react-icons/bi';
import ImgReplace from '../Common/ImgReplace';

const data = [
    { ProductCode: "T-001-228-8", ProductName: "Handmade cup", Image: "2023-1-10", Quantity: 1, Price: "$450", EDIT: "070-888-9995", Status: "Deliverd" },
    { ProductCode: "T-001-228-8", ProductName: "Photo Mugs", Image: "2023-2-10", Quantity: 2, Price: "$45", },
    { ProductCode: "T-001-228-8", ProductName: "Custom Mouse Pads", Image: "2023-1-20", Quantity: 4, Price:"$785",  EDIT: "075-888-9979", Status: "Cansel" },
    { ProductCode: "T-001-228-8", ProductName: "Handmade cup", Image: "2023-1-19", Quantity: 8, Price: "$789", EDIT: "070-888-9649", },
]

const MyShop = () => {
    return (
        <div>

            <div className='pt-24 p-1'>
                <div class="relative overflow-x-auto shadow-md rounded-sm">
                    <table class="w-full text-sm text-left text-gray-500  dark:text-gray-400">
                        <thead class="text-xs  uppercase   bg-gray-800 text-white ">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
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
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Edit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Save
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => {
                                return (

                                    <tr class="bg-white border-b text-gray-700 font-medium hover:bg-gray-100 ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-gray-800">
                                                {val.ProductCode}
                                        </th>
                                        <td class="px-6 py-4">
                                            {val.ProductName}
                                        </td>
                                        <td class="px-6 py-4">
                                            <ImgReplace />
                                        </td>
                                        <td class="px-6 py-4">
                                        {val.Quantity}
                                        </td>
                                        <td class="px-6 py-4">
                                        {val.Price}
                                        </td>

                                        <td class="px-6 py-4">
                                            <button className=' w-20 flex rounded-md w-16 h-8 bg-blue-600 text-white p-1 pl-2 '> <BiEdit className='text-xl' />&nbsp;Edit</button>

                                        </td>
                                        <td class="px-6 py-4">
                                            <button className='bg-green-500 rounded-md w-16 h-8 text-white'>Save</button>
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

export default MyShop