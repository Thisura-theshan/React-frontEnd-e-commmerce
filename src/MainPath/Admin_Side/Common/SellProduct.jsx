import React from 'react'
import clock from './img/clock.jpg'
import clk from './img/clk.jpg'

const SellProduct = () => {
    return (
        <div>
            <div class=" ">

                <div class="w-64 hover:scale-105 ease-in duration-300 cursor-pointer rounded-md overflow-hidden shadow-lg">
                    <img class="w-full" src={clk} alt="Mountain"/>
                        <div class="px-6 bg-gray-1 py-4">
                            <div class="font-bold text-xl mb-2 flex">Item Name

                            </div>
                            <div class="flex">
                                <p class="">
                                    Item Code : </p> &nbsp;
                                <p class="text-gray-700 text-base">Hellow</p>
                            </div>

                        </div>
                </div>
            </div>




        </div>
    )
}

export default SellProduct