import React from "react";
import "../styles/admin.css";

import Departments from "../components/admin/departments";
import { Routes, Route, Link } from "react-router-dom";
import Registration from "../components/admin/Registration";
import Exams from "../components/admin/Exams";
import Applications from "../components/admin/Applications.";

import DepartmentContent from "../components/admin/DepartmentContent";
import AddCourse from "../components/admin/newCourse";
import SitNumbers from "../components/admin/sitNumbers";
import CreatExamTable from "../components/admin/CreatExamTable";
import AddUser from "../components/admin/AddUser";
import AddAdpartment from "../components/admin/AddAdpartment";
import FlowChart from "../components/admin/charts";
function Admin() {
  return (
    <div className="admin" dir="rlt">
      <div className="header ">
        <div className="user my-2">
          <img
            src={require("../images/profile.png")}
            className=".user_image ms-3"
          />
          <div className="user_info">
            <Link to="/profile">ماهر مصطفي احمد</Link>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <Link className="action" to="/admin/">
          <img src={require("../images/meeting.png")} />
          <div className="action_name">معلومات النظام</div>
        </Link>
        <Link className="action" to="/admin/departments">
          <img src={require("../images/network.png")} />
          <div className="action_name">الاقسام</div>
        </Link>
        <Link className="action" to="/admin/exams">
          <img src={require("../images/exam.png")} />
          <div className="action_name">الاختبارات</div>
        </Link>
        <Link className="action" to="/admin/startRegistration">
          <img src={require("../images/online-registration.png")} />
          <div className="action_name">بدء التسجيل</div>
        </Link>
        <Link className="action" to="/admin/applications">
          <img src={require("../images/checklist.png")} />
          <div className="action_name">عرض التقديمات</div>
        </Link>
       
        <Link className="action" to="/admin/adduser">
          <img src={require("../images/add-user.png")} alt="add-user.png" />
          <div className="action_name">اضافة مستخدم جديد</div>
        </Link>
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<FlowChart />}></Route>
          <Route path="/courses/newCourse" element={<AddCourse />}></Route>
          <Route path="/startRegistration" element={<Registration />}></Route>
          <Route path="/exams" element={<Exams />}></Route>
          <Route path="/sitNumbers" element={<SitNumbers />}></Route>
          <Route path="/creatTable" element={<CreatExamTable />}></Route>
          <Route path="/applications" element={<Applications />}></Route>
          <Route path="/departments" element={<Departments />}></Route>
          <Route path="/newdepartment" element={<AddAdpartment />}></Route>
          <Route path="/departments/*" element={<DepartmentContent />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
