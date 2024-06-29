
import './App.css';
import {Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from './utilities/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import Admin from './pages/Admin';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons'
import DepartmentContent from './components/admin/DepartmentContent';
import Student from './pages/Student';
import Condations from './pages/Condations';
import ContactUs from './pages/ContactUs';
import AplyAplication from './pages/AplyAplication';

import Registration from './components/admin/Registration';
import Exams from './components/admin/Exams';
import Applications from './components/admin/Applications.';
import Departments from './components/admin/departments';

import AddCourse from './components/admin/newCourse';
import SitNumbers from './components/admin/sitNumbers';
import CreatExamTable from './components/admin/CreatExamTable';
import AddUser from './components/admin/AddUser';
import StudentsInfo from './components/doctor/StudentsInfo';
import Doctor from './pages/Doctor';
import GradesMonitor from './components/doctor/GradesMonitor';
import CoursesRequirments from './components/doctor/CoursesRequirments';

import Profile from './pages/Profile';

import AddAdpartment from './components/admin/AddAdpartment';
import MainInfo from './components/student/MainInfo';
import CourserRegister from './components/student/CourserRegister';
import CoursesResultes from './components/student/CoursesResultes';
import CoursesTable from './components/student/CoursesTable';
import Material from './components/student/Material';
import PublishResarsh from './components/student/PublishResarsh';
import RegisterPoint from './components/student/RegisterPoint';
import FlowChart from './components/admin/charts';
library.add(fas,far);
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/conditions" element={<Condations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registeration" element={<AplyAplication />} />
      
          <Route path="/profile" element={<Profile />} />

          <Route path="/student" element={<Student />}>
            <Route path="maininfo" element={<MainInfo />} />
            <Route path="coursesregister" element={<CourserRegister />} />
            <Route path="coursesresult" element={<CoursesResultes />} />
            <Route path="coursestable" element={<CoursesTable />} />
            <Route path="material" element={<Material />} />
            <Route path="rigesterpoint" element={<RegisterPoint />} />
            <Route path="publishresearsh" element={<PublishResarsh />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<FlowChart/>}></Route>
            <Route path="courses/newCourse" element={<AddCourse />}></Route>
            <Route path="startRegistration" element={<Registration />}></Route>
            <Route path="exams" element={<Exams />}></Route>
            <Route path="sitNumbers" element={<SitNumbers />}></Route>
            <Route path="creatTable" element={<CreatExamTable />}></Route>
            <Route path="applications" element={<Applications />}></Route>
            <Route path="newdepartment" element={<AddAdpartment />}></Route>
            <Route path="departments" element={<Departments />}></Route>
            <Route path="departments/*" element={<DepartmentContent />}></Route>
           
            <Route path="adduser" element={<AddUser />}></Route>
          </Route>
          <Route path="/doctor" element={<Doctor />}>
            <Route index path="students" element={<StudentsInfo />} />
            <Route path="GradesMonitor" element={<GradesMonitor />} />
            <Route path="coursesrequirment" element={<CoursesRequirments />} />
          
          </Route>
       
      </Routes>
    </div>
  );
}

export default App;
