import React from 'react'
import assets from '../Pages/assets/bckd.jpg'
import img2 from '../Pages/assets/img1.jpg'
import ShoppingCart from '../common/ShoppingCart';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';
import { OffCanves } from '../common/OffCanves';
import GallaryCard from '../common/GallaryCard';
import CheckOut from './SubPages/CheckOut';
import Shopping from './SubPages/Shopping';
import AboutUs from './SubPages/AboutUs';
import ItemCart from '../common/ItemCart';
import SignCheck from './SubPages/SignCheck';
import SignIn from '../common/SignIn';
import RegisterPage from '../common/RegisterPage';


const HomePage = () => {
    return (
        <div>
            {/*-- Offcanvas Menu -*/}
            <OffCanves />


            {/*-- Nav Bar -*/}
            <NavBar />

            {/* Home Image */}
            <div className='w-full   h-[780px]   shadow-2xl  overflow-hidden  relative  pt-40  p-44'>
                <img className=' absolute inset-0  w-full h-[780px]  object-cover ' src={assets} alt='this is an image'></img>
                <div className='absolute bg-gray-900 inset-0 bg-opacity-60'></div>

                <div className='relative pt-10 space-y-8'>
                    <p className='text-base text-white tracking-wider '>HANDMADE PRODUCT</p>
                    <p className='text-5xl text-white tracking-wider font-semibold'>Art - Craft <br /> Creativity in 2030</p>
                    <p className='text-sm text-white tracking-wider'>To sell your, talant and skill this is best market place .  is
                        Art and craft provide   <br /> a platform for artists for expressing their ideas and talents.</p>

                    <ul className='bg-white flex max-w-fit rounded-md space-x-0 '>
                        <li> <button className='tracking-widest font-sans  font-semibold p-3 flex'>SHOP NOW</button>
                        </li>
                    </ul>

                </div>
            </div>

            {/* Gallery */}

            <div className='pt-24'>     </div>

            <div >

                <GallaryCard />

                <div className='flex justify-start pl-44  '>
                    <img className=' w-[500px] h-[410px] shadow-xl ' src={img2} alt='this is an image'></img>
                </div>
                <div className='absolute  pr-80   space-y-4  text-neutral-600 pl-44'>
                    <div className=' text-4xl font-semibold flex '>Amazing <br />  Hand made product 2030</div>
                    <div className='text-xs font-medium tracking-[0.5em] underline underline-offset-8 decoration-1 cursor-pointer'>SHOP NOW</div>
                </div>


                <div className='flex justify-end pr-44'>
                    <img className=' w-[500px] h-[410px] shadow-xl ' src={img2} alt='this is an image'></img>
                    <div className='absolute  pr-96  pt-28 space-y-4 text-neutral-600'>
                        <div className=' text-4xl font-semibold flex '>Creativety <br />  handmade 2030</div>
                        <div className='text-xs font-medium tracking-[0.5em] underline underline-offset-8 decoration-1 cursor-pointer'>SHOP NOW</div>
                    </div>


                </div>

            </div>
            <div className='pt-24'></div>

            {/* Gallery End */}



            {/* Card Section */}

            <div className='pl-40'>
                <div className='grid grid-cols-3 gap-10'>

                    <ShoppingCart />
                    <ShoppingCart />
                    <ShoppingCart />
                    <ShoppingCart />
                    <ShoppingCart />
                    <ShoppingCart />

                </div>
            </div>

            <div className='pt-20'>

            </div>

            {/* Card Section end */}
            
            <Footer />

            <hr className=''></hr>
            <div className=''>

            </div>
 
            <div className='pl-10'>
                
            </div>
           
        </div>

    )
}

export default HomePage