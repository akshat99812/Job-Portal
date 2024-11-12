import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className=' bg-purple-300 height-[300px] px-36 py-10'>
      <div className='flex justify-between'>
            <div className='flex gap-x-10'>
                <div>
                    <Image
                        src="/images/codameLogoLight.webp" 
                        alt="Codame Logo"
                        width={50}                    
                        height={30}                  
                        priority                        
                        />
                </div>
                <div className='mx-auto text-4xl text-bold font-bold text-white'>
                    Codame
                </div>
            </div>
            <div className='mx-auto my-auto'>
                <div className='mx-auto text-xl text-bold font-bold text-white'>
                    Website
                </div> 
                <div>
                    <a href="https://www.linkedin.com/company/iiitbcodes/posts/?feedView=all"
                    className='mx-auto text-xl text-bold font-bold text-white'>LinkedIn</a>
                </div>  
            </div>
            
            <div className='mx-auto font-bold text-white'>
                © 2024 Codame. All rights reserved.
            </div>
      </div>
    </div>
  )
}

export default footer
