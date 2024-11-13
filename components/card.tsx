// components/JobCard.js
import React from "react";

interface Job {
    title: string;
    company: string;
    jobType: string;
    workLocation: string;
    salaryRange: string;
}



const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 mb-4 border ">
      <h5 className="text-gray-900 font-bold text-xl mb-2">{job.title}</h5>
      <p className="text-gray-700 text-base mb-2">{job.company}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
          {job.jobType}
        </span>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
          {job.workLocation}
        </span>
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
          {job.salaryRange}
        </span>
      </div>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
