import React, { useState } from 'react'
import { AiTwotoneUpSquare } from 'react-icons/ai';

const data = [
    {
        id:1,
        first_name: 'Surige',
        last_name: 'Dishna',
        email:'abc@gmail.com',
        phone:'070-88-9866'
    },
    {
        id:2,
        first_name: 'Lucky',
        last_name: 'Diyas',
        email:'Lcky@gmail.com',
        phone:'078-858-0000'
    },
    {
        id:3,
        first_name: 'This',
        last_name: 'Sure',
        email:'This@gmail.com',
        phone:'074-858-9418'
    },
]


const TableFilter = () => {

    const[search, setSearch] = useState('')
    console.log(search);

    return (
        <div>
            <div class="pl-2 pt-20 bg-white-700">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md w-80  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>

            <div className='pt-4 pb-4'>

            </div>

            <table className='w-[1200px] '>
                <thead className='border-b h-8  bg-gray-200 text-sm'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className='border-b bg-blue-100 h-12 text-sm'>
                    {data.filter((item) => {
                        return search.toLowerCase() === ''
                        ? item
                        : item.first_name.toLowerCase().includes(search);
                    }).map((item) => (
                        <tr className='p-4' key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}


                </tbody>

            </table>
        </div>
    )
}

export default TableFilter