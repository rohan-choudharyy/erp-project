import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
      <h2>Job Postings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.jobTitle}</h3>
            <p>{job.jobDescription}</p>
            <p>{job.jobRequirements}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
