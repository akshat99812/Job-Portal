// components/SidebarFilters.js
import { useState } from "react";

const SidebarFilters = () => {
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [isWorkLocationOpen, setIsWorkLocationOpen] = useState(false);
  const [isSalaryRangeOpen, setIsSalaryRangeOpen] = useState(false);

  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedWorkLocation, setSelectedWorkLocation] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");

  const jobTypes = ["Full Time", "Part Time", "Internship", "Contract"];
  const workLocations = ["Remote", "Hybrid", "Office"];
  const salaryRanges = [
    "$0-$5k",
    "$5-$10k",
    "$10-$30k",
    "$30-$50k",
    "$50k or above",
  ];

  return (
    <aside className="p-4 bg-gray-100 w-60 h-screen">
      <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>
      
      {/* Job Type Dropdown */}
      <div className="mb-6">
        <button
          onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
          className="w-full text-left font-semibold py-2 border-b"
        >
          Job Type
        </button>
        {isJobTypeOpen && (
          <div className="mt-2 pl-2">
            {jobTypes.map((type) => (
              <label key={type} className="block text-sm">
                <input
                  type="radio"
                  name="jobType"
                  checked={selectedJobType === type}
                  onChange={() => setSelectedJobType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Work Location Dropdown */}
      <div className="mb-6 ">
        <button
          onClick={() => setIsWorkLocationOpen(!isWorkLocationOpen)}
          className="w-full text-left font-semibold py-2 border-b"
        >
          Work Location
        </button>
        {isWorkLocationOpen && (
          <div className="mt-2 pl-2">
            {workLocations.map((location) => (
              <label key={location} className="block text-sm">
                <input
                  type="radio"
                  name="workLocation"
                  checked={selectedWorkLocation === location}
                  onChange={() => setSelectedWorkLocation(location)}
                  className="mr-2"
                />
                {location}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Salary Range Dropdown */}
      <div className="">
        <button
          onClick={() => setIsSalaryRangeOpen(!isSalaryRangeOpen)}
          className="w-full text-left font-semibold py-2 border-b"
        >
          Salary Range
        </button>
        {isSalaryRangeOpen && (
          <div className="mt-2 pl-2">
            {salaryRanges.map((range) => (
              <label key={range} className="block text-sm">
                <input
                  type="radio"
                  name="salaryRange"
                  checked={selectedSalaryRange === range}
                  onChange={() => setSelectedSalaryRange(range)}
                  className="mr-2"
                />
                {range}
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarFilters;
