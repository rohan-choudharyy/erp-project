import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching employee details
        setEmployee({
            id: id,
            name: "Sagnik Sanyal",
            email: "sagnik@gmail.com",
            salary: "50000",
            image: "sagnik.jpg"
        });
    }, [id]);

    const handleLogout = () => {
        // Simulate logout action
        console.log('Logged out');
        localStorage.removeItem("valid");
        navigate('/');
    };

    return (
        <div>
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Employee Management System</h4>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                <img src={`/Images/` + employee.image} alt={employee.name} className='emp_det_image'/>
                <div className='d-flex align-items-center flex-column mt-5'>
                    <h3>Name: {employee.name}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: ${employee.salary}</h3>
                </div>
                <div>
                    <button className='btn btn-primary me-2'>Edit</button>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
