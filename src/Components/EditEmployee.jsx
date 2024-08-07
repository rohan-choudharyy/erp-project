import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: "", email: "", salary: "", address: "", category_id: "",
    });
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching categories
        setCategory([
            { id: "1", name: "Category 1 IT" },
            { id: "2", name: "Category 2 Management" }
        ]);

        // Simulate fetching employee data
        setEmployee({
            name: "Sagnik Sanyal",
            email: "sagnik@gmail.com",
            address: "Kolkata",
            salary: "50000",
            category_id: "1"
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Employee data submitted:', employee);
        navigate('/dashboard/employee');
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-3 rounded w-50 border">
                <h3 className="text-center">Edit Employee</h3>
                <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control rounded-0" id="inputName" placeholder="Enter Name" value={employee.name} onChange={(e) =>
                                setEmployee({ ...employee, name: e.target.value })
                        }/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control rounded-0" id="inputEmail4" placeholder="Enter Email" autoComplete="off" value={employee.email} onChange={(e) =>
                                setEmployee({ ...employee, email: e.target.value })
                        }/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputSalary" className="form-label">Salary</label>
                        <input type="text" className="form-control rounded-0" id="inputSalary" placeholder="Enter Salary" autoComplete="off" value={employee.salary} onChange={(e) =>
                                setEmployee({ ...employee, salary: e.target.value })
                        }/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control rounded-0" id="inputAddress" placeholder="Add Address" autoComplete="off" value={employee.address} onChange={(e) =>
                                setEmployee({ ...employee, address: e.target.value })
                        }/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select name="category" id="category" className="form-select" value={employee.category_id} onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })} >
                            {category.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Edit Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployee;
