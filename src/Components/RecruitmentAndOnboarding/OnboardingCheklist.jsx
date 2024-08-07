import React, { useState } from 'react';

const OnboardingChecklist = ({ onboardingTasks }) => {
  const [tasks, setTasks] = useState(onboardingTasks);

  const handleCheckboxChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className='col-10 col-sm-10 col-md-9 col-xl-10 mt-4 p-4'>
      <h2>Onboarding Checklist</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{task.taskName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnboardingChecklist;
