import React, { useState } from 'react';

const JobPostingForm = ({ addJob }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ jobTitle, jobDescription, jobRequirements });
    setJobTitle('');
    setJobDescription('');
    setJobRequirements('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <hr></hr>
        
        <label>Job Description</label>
        
        <input
          type="text"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />

        <hr></hr>
        
        <label>Job Requirements</label>
        <input
          type="text"
          value={jobRequirements}
          onChange={(e) => setJobRequirements(e.target.value)}
          required
        />
      </div>
      <br></br>
      <button type="submit">Post </button>
    </form>
  );
};

export default JobPostingForm;
