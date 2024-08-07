import React from 'react';

const ApplicantList = ({ applicants, viewApplicant }) => {
  return (
    <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
      <h2>Applicants</h2>
      <ul>
        {applicants.map((applicant, index) => (
          <li key={index}>
            <p>{applicant.name}</p>
            <button onClick={() => viewApplicant(applicant)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantList;
