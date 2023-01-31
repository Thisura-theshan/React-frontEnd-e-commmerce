import React from 'react'
import { Link } from 'react-router-dom'

const SignCheck = () => {
    return (
        <div className=' bg-gray-900'>
            <div className='h-[752px] w-96'>
            <div >
                <div className='grid  pl-[620px] pt-64'>
                    <Link to={"/SignIn"}><button className='bg-indigo-600 rounded-md p-4  text-2xl text-white w-96'>Sign In As a Admin</button><br /></Link>
                    
                  

                    <div className='pb-6'></div>
                    <Link to={"/SignIn"}><button className='bg-emerald-500 rounded-md p-4  text-2xl  text-white w-96'>Sign In As a User</button></Link>
                    
                    
                </div>

            </div>
 
</div>
        </div>
    )
}

export default SignCheck