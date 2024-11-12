"use client"
import Navbar from '@/components/navbar'
import React from 'react'
import Footer from '@/components/footer';
import JobPortal from '@/components/jobPortal';

const page = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='flex'>
        <div>
            <JobPortal></JobPortal>
        </div>
        <div>

        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
