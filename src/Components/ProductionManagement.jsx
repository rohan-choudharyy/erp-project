import React, { useState } from "react";

const ProductionManagement = () => {
  const [bomItems, setBomItems] = useState([
    { id: 1, itemName: "Item A", quantity: 10, price: 50 },
    { id: 2, itemName: "Item B", quantity: 20, price: 30 },
  ]);

  const [shopFloorItems, setShopFloorItems] = useState([
    { id: 1, machine: "Machine 1", status: "Running" },
    { id: 2, machine: "Machine 2", status: "Stopped" },
  ]);

  const [qualityItems, setQualityItems] = useState([
    { id: 1, testName: "Test A", result: "Passed" },
    { id: 2, testName: "Test B", result: "Failed" },
  ]);

  const [maintenanceItems, setMaintenanceItems] = useState([
    { id: 1, equipment: "Equipment A", issue: "Minor" },
    { id: 2, equipment: "Equipment B", issue: "Major" },
  ]);

  const [newBomItem, setNewBomItem] = useState({ itemName: "", quantity: "", price: "" });
  const [newShopFloorItem, setNewShopFloorItem] = useState({ machine: "", status: "" });
  const [newQualityItem, setNewQualityItem] = useState({ testName: "", result: "" });
  const [newMaintenanceItem, setNewMaintenanceItem] = useState({ equipment: "", issue: "" });

  const addBomItem = () => {
    setBomItems([...bomItems, { ...newBomItem, id: bomItems.length + 1, price: parseFloat(newBomItem.price) }]);
    setNewBomItem({ itemName: "", quantity: "", price: "" });
  };

  const addShopFloorItem = () => {
    setShopFloorItems([...shopFloorItems, { ...newShopFloorItem, id: shopFloorItems.length + 1 }]);
    setNewShopFloorItem({ machine: "", status: "" });
  };

  const addQualityItem = () => {
    setQualityItems([...qualityItems, { ...newQualityItem, id: qualityItems.length + 1 }]);
    setNewQualityItem({ testName: "", result: "" });
  };

  const addMaintenanceItem = () => {
    setMaintenanceItems([...maintenanceItems, { ...newMaintenanceItem, id: maintenanceItems.length + 1 }]);
    setNewMaintenanceItem({ equipment: "", issue: "" });
  };

  const deleteBomItem = (id) => {
    setBomItems(bomItems.filter((item) => item.id !== id));
  };

  const deleteShopFloorItem = (id) => {
    setShopFloorItems(shopFloorItems.filter((item) => item.id !== id));
  };

  const deleteQualityItem = (id) => {
    setQualityItems(qualityItems.filter((item) => item.id !== id));
  };

  const deleteMaintenanceItem = (id) => {
    setMaintenanceItems(maintenanceItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-3">
      <h2>Production and Manufacturing Management</h2>

      <div className="mt-4">
        <h4>Bill of Materials (BOM)</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bomItems.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => deleteBomItem(item.id)} className="btn btn-danger">
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
              placeholder="Item Name"
              value={newBomItem.itemName}
              onChange={(e) => setNewBomItem({ ...newBomItem, itemName: e.target.value })}
            />
            <input
              type="number"
              className="form-control me-2"
              placeholder="Quantity"
              value={newBomItem.quantity}
              onChange={(e) => setNewBomItem({ ...newBomItem, quantity: e.target.value })}
            />
            <input
              type="number"
              className="form-control me-2"
              placeholder="Price"
              value={newBomItem.price}
              onChange={(e) => setNewBomItem({ ...newBomItem, price: e.target.value })}
            />
            
          </div>
          <button onClick={addBomItem} className="btn btn-primary">
              Add Item
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Shop Floor Management</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Machine</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shopFloorItems.map((item) => (
              <tr key={item.id}>
                <td>{item.machine}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => deleteShopFloorItem(item.id)} className="btn btn-danger">
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
              placeholder="Machine"
              value={newShopFloorItem.machine}
              onChange={(e) => setNewShopFloorItem({ ...newShopFloorItem, machine: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Status"
              value={newShopFloorItem.status}
              onChange={(e) => setNewShopFloorItem({ ...newShopFloorItem, status: e.target.value })}
            />
            
          </div>
          <button onClick={addShopFloorItem} className="btn btn-primary">
              Add Item
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Quality Control</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {qualityItems.map((item) => (
              <tr key={item.id}>
                <td>{item.testName}</td>
                <td>{item.result}</td>
                <td>
                  <button onClick={() => deleteQualityItem(item.id)} className="btn btn-danger">
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
              placeholder="Test Name"
              value={newQualityItem.testName}
              onChange={(e) => setNewQualityItem({ ...newQualityItem, testName: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Result"
              value={newQualityItem.result}
              onChange={(e) => setNewQualityItem({ ...newQualityItem, result: e.target.value })}
            />
            
          </div>
          <button onClick={addQualityItem} className="btn btn-primary">
              Add Item
            </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Maintenance Management</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Issue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceItems.map((item) => (
              <tr key={item.id}>
                <td>{item.equipment}</td>
                <td>{item.issue}</td>
                <td>
                  <button onClick={() => deleteMaintenanceItem(item.id)} className="btn btn-danger">
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
              placeholder="Equipment"
              value={newMaintenanceItem.equipment}
              onChange={(e) => setNewMaintenanceItem({ ...newMaintenanceItem, equipment: e.target.value })}
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="Issue"
              value={newMaintenanceItem.issue}
              onChange={(e) => setNewMaintenanceItem({ ...newMaintenanceItem, issue: e.target.value })}
            />
            
          </div>
          <button onClick={addMaintenanceItem} className="btn btn-primary">
              Add Item
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionManagement;
