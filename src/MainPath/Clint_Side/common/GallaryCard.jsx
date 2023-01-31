import React from 'react'
import img2 from '../Pages/assets/img1.jpg'

const GallaryCard = () => {
    return (
        <div>
            <div className='flex justify-end pr-44'>
                <img className=' w-[430px] h-[410px] shadow-xl ' src={img2} alt='this is an image'></img>
                <div className='absolute  pr-96  pt-28 space-y-4 text-neutral-600'>
                    <div className=' text-4xl font-semibold flex '>Hand made <br />  Product 2030</div>
                    <div className='text-xs font-medium tracking-[0.5em] underline underline-offset-8 decoration-1 cursor-pointer'>SHOPNOW</div>
                </div>
            </div>

            
        </div>
    )
}

export default GallaryCard