import React from 'react';

const ApplicantDetails = ({ applicant }) => {
  if (!applicant) return <div>Select an applicant to view details</div>;

  return (
    <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
      <h2>Applicant Details</h2>
      <p>Name: {applicant.name}</p>
      <p>Email: {applicant.email}</p>
      <p>Resume: <a href={applicant.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></p>
      <p>Cover Letter: {applicant.coverLetter}</p>
    </div>
  );
};

export default ApplicantDetails;
