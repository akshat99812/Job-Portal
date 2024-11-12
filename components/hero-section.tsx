'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until after mount
  }

  return (
    <section className="relative container min-w-full pb-10 h-fit py-10 bg-hero-bg-light object-contain dark:bg-hero-bg-dark">
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-col items-center">
          <p className="py-2 px-3 rounded-full border text-sm my-4 text-[#020817] bg-[#F1F5F9] border-[#E2E8F0] dark:text-[#FFFF] dark:bg-[#0F172A] dark:border-[#1E293B]">
            <span className="text-[#d580ff]">#1</span> Platform for jobs and internships
          </p>
          <h1 className="text-5xl font-bold leading-snug text-center text-[#020817] dark:text-[#F8FAFC]">
            Build Your
            <span className="career-span bg-[#d580ff] py-1 px-5 ml-1 font-bold rounded-xl text-white transform -rotate-10 transition-transform duration-300 hover:rotate-0 hover:brightness-105 relative overflow-hidden">
              Career
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-20 transform skew-x-12 -translate-x-full hover:translate-x-full transition duration-500 ease-in-out"></span>
            </span>
            <br />
            with Codame
          </h1>
          <p className="md:w-4/6 w-full text-center my-3 text-[#64748B] font-medium dark:text-[#94A3B8]">
            Find your dream job and internship opportunities. Remote, onsite, or
            hybrid—we've got what you're looking for.
          </p>
        </div>
        <div className="md:w-4/6 w-full flex md:flex-row flex-col items-center justify-center my-4">
          <Link
            href={'/jobs'}
            aria-label="explore-jobs"
            className="md:w-fit w-full rounded-lg py-2 px-3 bg-[#d580ff] text-sm text-[#FFFF] font-medium hover:bg-[#aa00ff] text-center"
          >
            Explore Jobs
          </Link>
          <Link
            href={'#testimonials'}
            className="md:w-fit w-full rounded-lg py-2 px-3 border text-sm md:ml-3 md:my-0 my-3 bg-transparent text-[#64748B] font-medium hover:bg-slate-100 text-center dark:bg-slate-900 dark:text-[#94A3B8] dark:hover:bg-slate-900"
            aria-label="view-testimonals"
          >
            View Testimonials
          </Link>
        </div>
        <div className="flex flex-col items-center my-5">
          <p className="border border-[#d580ff] rounded-lg bg-opacity-10 py-1 px-3 text-[#d580ff] text-xs w-fit font-medium">
            Backed by Codame Founders
          </p>
          {/* Uncomment below if using trusted companies */}
          {/* <div className="grid md:grid-cols-6 grid-cols-2 items-center gap-1 md:mt-0 mt-4 dark:bg-[#02081766]">
            {trustedCompanies.map((company, i) => (
              <Image
                key={i}
                className="mx-4 md:w-28 w-24 h-20 md:h-24"
                src={company.icon}
                alt={`${company.name}-icon`}
              />
            ))}
          </div> */}
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
