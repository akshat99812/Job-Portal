"use client"
import Navbar from '@/components/navbar'
import React from 'react'
import Footer from '@/components/footer';
import JobPortal from '@/components/jobPortal';
import JobCard from '@/components/card';
import jobs from '@/data.json';



const page = () => {


  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='flex'>
        <div>
            <JobPortal ></JobPortal>
        </div>
        <div className="w-full mx-auto">
        {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
        ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
