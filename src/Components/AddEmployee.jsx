import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "", email: "", password: "", salary: "", address: "", category_id: "", image: "", 
  });
  const [category, setCategory] = useState([
    { id: 1, name: "Category 1 IT" },
    { id: 2, name: "Category 2 Management" }
  ]); // Example categories
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching categories
    setCategory([
      { id: 1, name: "Category 1 IT" },
      { id: 2, name: "Category 2 Management" }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful employee addition
    alert('Employee added successfully!');
    navigate('/dashboard/employee');
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control rounded-0" id="inputName" placeholder="Enter Name" onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
            }/>
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control rounded-0" id="inputEmail4" placeholder="Enter Email" autoComplete="off" onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
            }/>
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control rounded-0" id="inputPassword4" placeholder="Enter Password" onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
            }/>
            <label htmlFor="inputSalary" className="form-label">Salary</label>
            <input type="text" className="form-control rounded-0" id="inputSalary" placeholder="Enter Salary" autoComplete="off" onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
            }/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control rounded-0" id="inputAddress" placeholder="Add Address" autoComplete="off" onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
            }/>
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">Category</label>
            <select name="category" id="category" className="form-select" onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}>
              {category.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">Select Image</label>
            <input type="file" className="form-control rounded-0" id="inputGroupFile01" name="image" onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
