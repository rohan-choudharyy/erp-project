import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    // Simulate fetching employee data
    setEmployee([
      {
        id: "1",
        name: "Sagnik Sanyal",
        email: "sagnik@gmil.com",
        address: "Kolkata",
        salary: "50,000 $",
        image: " "
      },
      {
        id: "2",
        name: "Rupkatha Maity",
        email: "rupkatha@yahoo.com",
        address: "Fairytale",
        salary: "60,000 $",
        image: "rupkatha.jpg"
      }
    ]);
  }, []);

  const handleDelete = (id) => {
    // Simulate deleting an employee
    console.log('Employee deleted:', id);
    setEmployee(employee.filter(e => e.id !== id));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">Add Employee</Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`/Images/` + e.image}
                    alt={e.name}
                    className="employee_image"
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <Link to={`/dashboard/edit_employee/` + e.id} className="btn btn-info btn-sm me-2" >Edit</Link>
                  <button className="btn btn-warning btn-sm" onClick={() => handleDelete(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
