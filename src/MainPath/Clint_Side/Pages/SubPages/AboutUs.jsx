import React from 'react'
import about from './img/about.jpg'
import ceo from './img/ceo.jpg'
import manager from './img/manager.jpg'
import dire from './img/dire.jpg'
import dir3 from './img/dir3.jpg'
import wallper from './img/wallper.jpg'
import ContactUs from '../../common/ContactUs'
import { OffCanves } from '../../common/OffCanves'
import NavBar from '../../common/NavBar'
const AboutUs = () => {

    return (
        <div>
            <OffCanves/>
            <NavBar/>
            <div >
                <div className='flex pt-24 flex-wrap  justify-center'>
                    <img className=' h-[450px] w-[1310px] ' src={wallper} alt="" />
                    
                <div className='  flex pt-4 '>
                        <div className='mr-44'>
                            <h2 className='text-2xl'>Who We Are</h2>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur Eveniet,<br/>
                             adipisicing elit. Eveniet a consectetur Eveniet<br/>
                             Lorem ipsum dolor sit amet ,</p>
                        </div>

                        <div className='mr-44'>
                            <h1 className='text-2xl'>Who We do</h1>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur Eveniet,<br/>
                             adipisicing elit. Eveniet a consectetur Eveniet<br/>
                             Lorem ipsum dolor sit amet ,</p>
                        </div>

                        <div>
                            <h2 className='text-2xl'>Why choose us</h2>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur Eveniet,<br/>
                             adipisicing elit. Eveniet a consectetur Eveniet<br/>
                             Lorem ipsum dolor sit amet ,</p>
                        </div>

                        
                </div>

                   
                </div>


                <div className='pt-10'></div>

                <hr/>
                <p className='flex justify-center pt-10 text-4xl font-medium'>Meet Our Team</p>

                <div className='pt-10 flex justify-center pl-10'>
                    <div className='mr-10'>
                        <img className='h-80 w-72'  src={ceo} alt="" />
                        <p className='text-2xl '>John sean</p>
                        <p className='text-gray-500 font-light'>C.E.O</p>
                    </div>

                    <div className='mr-10'>
                        <img className='h-80 w-72'  src={manager} alt="" />
                        <p className='text-2xl '>sam made</p>
                        <p className='text-gray-500 font-light'>Director</p>
                    </div>

                    <div className='mr-10'>
                        <img className='h-80 w-72'  src={dire} alt="" />
                        <p className='text-2xl'>nice sean</p>
                        <p className='text-gray-500 font-light'>Manager</p>
                    </div>

                    <div className='mr-10'>
                        <img className='h-80 w-72'  src={dir3} alt="" />
                        <p className='text-2xl '>Manager</p>
                        <p className='text-gray-500 font-light'>CEO</p>
                    </div>
                </div>
                
            </div>

            <div className='pt-14'></div>
           <ContactUs/>
        </div>
    )
}

export default AboutUs
