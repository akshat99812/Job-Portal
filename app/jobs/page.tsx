// components/JobPortal.js
'use client';
import React, { useState, useEffect } from "react";
import SidebarFilters from "@/components/jobPortal";
import JobCard from "@/components/card";
import jobs from "@/data.json";
import Navbar from "@/components/navbar";

const JobPortal = () => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedWorkLocation, setSelectedWorkLocation] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  const [visibleJobs, setVisibleJobs] = useState(5);

  const filteredJobs = jobs.filter((job) => {
    if (selectedJobType && job.jobType !== selectedJobType) return false;
    if (selectedWorkLocation && job.workLocation !== selectedWorkLocation) return false;
    if (selectedSalaryRange) {
      const [min, max] = selectedSalaryRange.split("-").map(Number);
      const salary = Number(job.salaryRange.replace(/[$,]/g, ""));
      if (salary < min || salary > max) return false;
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="flex">
      <div>
        <SidebarFilters
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
          selectedWorkLocation={selectedWorkLocation}
          setSelectedWorkLocation={setSelectedWorkLocation}
          selectedSalaryRange={selectedSalaryRange}
          setSelectedSalaryRange={setSelectedSalaryRange}
        />
      </div>
      <div className="w-full mx-auto">
        {filteredJobs.slice(0, visibleJobs).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>

    </div>
    
  );
};

export default JobPortal;