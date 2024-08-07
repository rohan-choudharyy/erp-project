import React, { useState } from 'react'

const Home = () => {
  // Static data to replace API responses
  const [adminTotal] = useState("10") // Example static value
  const [employeeTotal] = useState("50") // Example static value
  const [salaryTotal] = useState(" Total Salary display from backend") // Example static value
  const [admins] = useState([
    { email: 'admin1@example.com' },
    { email: 'admin2@example.com' }
  ]) // Example static data

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map((a, index) => (
                <tr key={index}>
                  <td>{a.email}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2">
                      Edit
                    </button>
                    <button
                      className="btn btn-warning btn-sm" >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
