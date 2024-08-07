import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleLogout = () => {
    // Simulate logout process
    localStorage.removeItem("valid");
    navigate('/');
  };

  const getActiveClass = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to="/dashboard" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">ERP</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="w-100">
                <Link to="/dashboard" className={`nav-link text-white px-0 align-middle ${getActiveClass('/dashboard')}`}>
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/employee" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/employee')}`}>
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/category" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/category')}`}>
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/profile" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/profile')}`}>
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/production" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/production')}`}>
                  <i className="fs-4 bi-gear ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Production</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/projectmanagement" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/projectmanagement')}`}>
                  <i className="fs-4 bi-clipboard-data ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Project</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/customerservicemanagement" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/customerservicemanagement')}`}>
                  <i className="fs-4 bi-person-gear ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Customer Service</span>
                </Link>
              </li>

              <li className="w-100">
                <Link to="/dashboard/hr management" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/calender')}`}>
                  <i className="fs-4 bi-hr ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">HR Management</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/Chart" className="nav-link px-0 align-middle text-white" >
                  <i className="fs-4 bi-pie-chart-fill ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Chart</span>
                </Link>
              </li>
             <li className="w-100">
                <Link to="/dashboard/calender" className={`nav-link px-0 align-middle text-white ${getActiveClass('/dashboard/calender')}`}>
                  <i className="fs-4 bi-calendar ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Calendar</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
