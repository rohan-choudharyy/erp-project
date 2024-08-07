import React, { useState } from 'react';
import JobPostingForm from '../Components/RecruitmentAndOnboarding/JobPostingForm';
import JobList from '../Components/RecruitmentAndOnboarding/JobList';
import ApplicantList from '../Components/RecruitmentAndOnboarding/ApplicantList';
import ApplicantDetails from '../Components/RecruitmentAndOnboarding/ApplicantDetailes';
import OnboardingChecklist from '../Components/RecruitmentAndOnboarding/OnboardingCheklist';

const RecruitmentAndOnboarding = () => {
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [onboardingTasks, setOnboardingTasks] = useState([
    { taskName: 'Sign Employment Contract', completed: false },
    { taskName: 'Provide Bank Details', completed: false },
    { taskName: 'Complete Training Modules', completed: false },
  ]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const viewApplicant = (applicant) => {
    setSelectedApplicant(applicant);
  };

  return (
    <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
      <h1>RECRUITMENT</h1>
      <JobPostingForm addJob={addJob} />
      <JobList jobs={jobs} />
      <ApplicantList applicants={applicants} viewApplicant={viewApplicant} />
      <ApplicantDetails applicant={selectedApplicant} />
      <OnboardingChecklist onboardingTasks={onboardingTasks} />
    </div>
  );
};

export default RecruitmentAndOnboarding;
