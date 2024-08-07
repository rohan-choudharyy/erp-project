import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Category from './Components/Category';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Start from './Components/Start';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeeDetail from './Components/EmployeeDetail';
import PrivateRoute from './Components/PrivateRoute';
import ProductionManagement from './Components/ProductionManagement';
import ProjectManagement from './Components/ProjectManagement';
import CustomerServiceManagement from './Components/CustomerServiceManagement';
import MyCalendar from './Components/MyCalender';
import Chart from './Components/Chart[1]';
import RecruitmentAndOnboarding from './pages/RecruitmentAndOnboarding';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/adminlogin' element={<Login />} />
            <Route path='/employee_login' element={<EmployeeLogin />} />
            <Route path='/employee_detail/:id' element={<EmployeeDetail />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path='' element={<Home />} />
            <Route path='employee' element={<Employee />} />
            <Route path='category' element={<Category />} />
            <Route path='profile' element={<Profile />} />
            <Route path='add_category' element={<AddCategory />} />
            <Route path='add_employee' element={<AddEmployee />} />
            <Route path='edit_employee/:id' element={<EditEmployee />} />
            <Route path="production" element={<ProductionManagement />} />
            <Route path="projectmanagement" element={<ProjectManagement/>} />
            <Route path="customerservicemanagement" element={<CustomerServiceManagement/>} />
            <Route path="hr management" element={<RecruitmentAndOnboarding/>} />
            <Route path="chart" element={<Chart/>} />
            
            <Route path="calender" element={<MyCalendar/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
