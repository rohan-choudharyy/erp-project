// src/TimeAttendance.js
import React, { useState } from 'react';
//import './TimeAttendance.css';

const Profile = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', username: 'john', password: '1234' },
    { id: 2, name: 'Jane Smith', username: 'jane', password: '5678' },
  ]);

  const [attendanceLogs, setAttendanceLogs] = useState([]);
  const [loggedInEmployee, setLoggedInEmployee] = useState(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    const employee = employees.find(
      (emp) => emp.username === credentials.username && emp.password === credentials.password
    );
    if (employee) {
      setLoggedInEmployee(employee);
      recordAttendance(employee.id);
    } else {
      alert('Invalid credentials');
    }
  };

  const recordAttendance = (employeeId) => {
    const newLog = {
      employeeId,
      timestamp: new Date().toLocaleString(),
    };
    setAttendanceLogs([...attendanceLogs, newLog]);
  };

  return (
    <div className="time-attendance">
      <h2>Employee profile display</h2>
      <br>
      </br>
      {!loggedInEmployee ? (
        <div className="login-form">
          <h3>Login to track attendence</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Welcome, {loggedInEmployee.name}</h3>
          <p>Your attendance has been recorded.</p>
        </div>
      )}
      <div className="attendance-logs">
        <h3>Attendance Logs</h3>
        <ul>
          {attendanceLogs.map((log, index) => (
            <li key={index}>
              {employees.find((emp) => emp.id === log.employeeId).name} - {log.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
