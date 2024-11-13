import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div >
      <div className='flex gap-4 ml-4 items-center font-semibold text-gray-400 justify-between mx-10 my-4 '>
        <div className='flex'>
            <div className='my-auto'>
            <Image
                src="/images/codameLogoLight.webp" 
                alt="Codame Logo"
                width={50}                    
                height={30}                  
                priority                        
                />
            </div>
            <div className='my-auto'>
                <h1 className='text-2xl text-[#d580ff]'>Codame</h1>
            </div>
            
        </div>
        <div className='flex gap-4 ml-4 items-center text-sm font-semibold text-gray-400'>
            <div>
                Freelance 
            </div>
            <div>
                Explore Jobs
            </div>
            <div>
                Contact Us
            </div>
            <div>
                <button className='bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500'>
                    Sign in</button>
            </div>
        </div>
      </div>
      <div>
        <hr className='mx-10 '></hr>
      </div>
    </div>
  )
}

export default Navbar
