import React, { useState } from "react";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project Alpha", startDate: "2024-01-01", endDate: "2024-12-31" },
    { id: 2, name: "Project Beta", startDate: "2024-02-01", endDate: "2024-11-30" },
  ]);

  const [resources, setResources] = useState([
    { id: 1, name: "Resource 1", allocation: "50%" },
    { id: 2, name: "Resource 2", allocation: "75%" },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", milestone: "Milestone 1" },
    { id: 2, name: "Task 2", milestone: "Milestone 2" },
  ]);

  const [timeExpenses, setTimeExpenses] = useState([
    { id: 1, description: "Development", time: "40 hours", expense: "$2000" },
    { id: 2, description: "Testing", time: "20 hours", expense: "$1000" },
  ]);

  const [reports, setReports] = useState([
    { id: 1, title: "Weekly Report", analytics: "Positive" },
    { id: 2, title: "Monthly Report", analytics: "Stable" },
  ]);

  const [newProject, setNewProject] = useState({ name: "", startDate: "", endDate: "" });
  const [newResource, setNewResource] = useState({ name: "", allocation: "" });
  const [newTask, setNewTask] = useState({ name: "", milestone: "" });
  const [newTimeExpense, setNewTimeExpense] = useState({ description: "", time: "", expense: "" });
  const [newReport, setNewReport] = useState({ title: "", analytics: "" });

  const addProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setNewProject({ name: "", startDate: "", endDate: "" });
  };

  const addResource = () => {
    setResources([...resources, { ...newResource, id: resources.length + 1 }]);
    setNewResource({ name: "", allocation: "" });
  };

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({ name: "", milestone: "" });
  };

  const addTimeExpense = () => {
    setTimeExpenses([...timeExpenses, { ...newTimeExpense, id: timeExpenses.length + 1 }]);
    setNewTimeExpense({ description: "", time: "", expense: "" });
  };

  const addReport = () => {
    setReports([...reports, { ...newReport, id: reports.length + 1 }]);
    setNewReport({ title: "", analytics: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const deleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteTimeExpense = (id) => {
    setTimeExpenses(timeExpenses.filter((timeExpense) => timeExpense.id !== id));
  };

  const deleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div className="container mt-3">
      <h2>Project Management</h2>

      <div className="mt-4">
        <h4>Project Planning and Scheduling</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>
                  <button onClick={() => deleteProject(project.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-3">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Project Name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
            <input
              type="date"
              className="form-control me-2"
              placeholder="Start Date"
              value={newProject.startDate}
              onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
            />
            <input
              type="date"
              className="form-control me-2"
              placeholder="End Date"
              value={newProject.endDate}
              onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
            />
            
          </div>
          <button onClick={addProject} className="btn btn-primary">
              Add Project
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Resource Allocation</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Allocation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.name}</td>
                <td>{resource.allocation}</td>
                <td>
                  <button onClick={() => deleteResource(resource.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-3">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Resource Name"
              value={newResource.name}
              onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Allocation"
              value={newResource.allocation}
              onChange={(e) => setNewResource({ ...newResource, allocation: e.target.value })}
            />
            
          </div>
          <button onClick={addResource} className="btn btn-primary">
              Add Resource
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Task and Milestone Tracking</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Milestone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.milestone}</td>
                <td>
                  <button onClick={() => deleteTask(task.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-3">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Task Name"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Milestone"
              value={newTask.milestone}
              onChange={(e) => setNewTask({ ...newTask, milestone: e.target.value })}
            />
          </div>
          <button onClick={addTask} className="btn btn-primary">
              Add Task
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Time and Expense Tracking</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Time</th>
              <th>Expense</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {timeExpenses.map((timeExpense) => (
              <tr key={timeExpense.id}>
                <td>{timeExpense.description}</td>
                <td>{timeExpense.time}</td>
                <td>{timeExpense.expense}</td>
                <td>
                  <button onClick={() => deleteTimeExpense(timeExpense.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-3">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Description"
              value={newTimeExpense.description}
              onChange={(e) => setNewTimeExpense({ ...newTimeExpense, description: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Time"
              value={newTimeExpense.time}
              onChange={(e) => setNewTimeExpense({ ...newTimeExpense, time: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Expense"
              value={newTimeExpense.expense}
              onChange={(e) => setNewTimeExpense({ ...newTimeExpense, expense: e.target.value })}
            />
            
          </div>
          <button onClick={addTimeExpense} className="btn btn-primary">
              Add Time/Expense
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Project Reporting and Analytics</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Report Title</th>
              <th>Analytics</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.analytics}</td>
                <td>
                  <button onClick={() => deleteReport(report.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-3">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Report Title"
              value={newReport.title}
              onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Analytics"
              value={newReport.analytics}
              onChange={(e) => setNewReport({ ...newReport, analytics: e.target.value })}
            />
            
          </div>
          <button onClick={addReport} className="btn btn-primary">
              Add Report
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
