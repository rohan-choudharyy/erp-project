import React, { useState } from "react";

const CustomerServiceManagement = () => {
  const [tickets, setTickets] = useState([
    { id: 1, issue: "Login Issue", status: "Open" },
    { id: 2, issue: "Payment Issue", status: "Closed" },
  ]);

  const [slas, setSlas] = useState([
    { id: 1, name: "Standard SLA", responseTime: "24 hours" },
    { id: 2, name: "Premium SLA", responseTime: "2 hours" },
  ]);

  const [knowledgeBase, setKnowledgeBase] = useState([
    { id: 1, article: "How to reset password", category: "Account" },
    { id: 2, article: "Payment options", category: "Billing" },
  ]);

  const [feedback, setFeedback] = useState([
    { id: 1, user: "John Doe", feedback: "Great service!" },
    { id: 2, user: "Jane Smith", feedback: "Could be better." },
  ]);

  const [newTicket, setNewTicket] = useState({ issue: "", status: "" });
  const [newSla, setNewSla] = useState({ name: "", responseTime: "" });
  const [newArticle, setNewArticle] = useState({ article: "", category: "" });
  const [newFeedback, setNewFeedback] = useState({ user: "", feedback: "" });

  const addTicket = () => {
    setTickets([...tickets, { id: tickets.length + 1, ...newTicket }]);
    setNewTicket({ issue: "", status: "" });
  };

  const addSla = () => {
    setSlas([...slas, { id: slas.length + 1, ...newSla }]);
    setNewSla({ name: "", responseTime: "" });
  };

  const addArticle = () => {
    setKnowledgeBase([...knowledgeBase, { id: knowledgeBase.length + 1, ...newArticle }]);
    setNewArticle({ article: "", category: "" });
  };

  const addFeedback = () => {
    setFeedback([...feedback, { id: feedback.length + 1, ...newFeedback }]);
    setNewFeedback({ user: "", feedback: "" });
  };

  const deleteItem = (id, setStateFunction, state) => {
    setStateFunction(state.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Customer Service Management</h2>

      <div className="section mt-4">
        <h3>Support Ticketing System</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Issue</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.issue}</td>
                <td>{ticket.status}</td>
                <td>
                  <button onClick={() => deleteItem(ticket.id, setTickets, tickets)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Issue</label>
            <input
              type="text"
              className="form-control"
              placeholder="Issue"
              value={newTicket.issue}
              onChange={(e) => setNewTicket({ ...newTicket, issue: e.target.value })}
            />
          </div>
          <div className="form-group ml-3">
            <label>Status</label>
            <input
              type="text"
              className="form-control"
              placeholder="Status"
              value={newTicket.status}
              onChange={(e) => setNewTicket({ ...newTicket, status: e.target.value })}
            />
          </div>
        </div>
        <button onClick={addTicket} className="btn btn-primary mt-2">Add Ticket</button>
      </div>

      <div className="section mt-4">
        <h3>Service Level Agreement (SLA) Management</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Response Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {slas.map(sla => (
              <tr key={sla.id}>
                <td>{sla.name}</td>
                <td>{sla.responseTime}</td>
                <td>
                  <button onClick={() => deleteItem(sla.id, setSlas, slas)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newSla.name}
              onChange={(e) => setNewSla({ ...newSla, name: e.target.value })}
            />
          </div>
          <div className="form-group ml-3">
            <label>Response Time</label>
            <input
              type="text"
              className="form-control"
              placeholder="Response Time"
              value={newSla.responseTime}
              onChange={(e) => setNewSla({ ...newSla, responseTime: e.target.value })}
            />
          </div>
        </div>
        <button onClick={addSla} className="btn btn-primary mt-2">Add SLA</button>
      </div>

      <div className="section mt-4">
        <h3>Knowledge Base</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Article</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {knowledgeBase.map(article => (
              <tr key={article.id}>
                <td>{article.article}</td>
                <td>{article.category}</td>
                <td>
                  <button onClick={() => deleteItem(article.id, setKnowledgeBase, knowledgeBase)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Article</label>
            <input
              type="text"
              className="form-control"
              placeholder="Article"
              value={newArticle.article}
              onChange={(e) => setNewArticle({ ...newArticle, article: e.target.value })}
            />
          </div>
          <div className="form-group ml-3">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={newArticle.category}
              onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
            />
          </div>
        </div>
        <button onClick={addArticle} className="btn btn-primary mt-2">Add Article</button>
      </div>

      <div className="section mt-4">
        <h3>Customer Feedback and Surveys</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>User</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map(fb => (
              <tr key={fb.id}>
                <td>{fb.user}</td>
                <td>{fb.feedback}</td>
                <td>
                  <button onClick={() => deleteItem(fb.id, setFeedback, feedback)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>User</label>
            <input
              type="text"
              className="form-control"
              placeholder="User"
              value={newFeedback.user}
              onChange={(e) => setNewFeedback({ ...newFeedback, user: e.target.value })}
            />
          </div>
          <div className="form-group ml-3">
            <label>Feedback</label>
            <input
              type="text"
              className="form-control"
              placeholder="Feedback"
              value={newFeedback.feedback}
              onChange={(e) => setNewFeedback({ ...newFeedback, feedback: e.target.value })}
            />
          </div>
        </div>
        <button onClick={addFeedback} className="btn btn-primary mt-2">Add Feedback</button>
      </div>
    </div>
  );
};

export default CustomerServiceManagement;
