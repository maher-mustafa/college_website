import React, { useEffect, useState } from 'react'
import "../styles/student/main.css"

import { Link, Route, Routes} from "react-router-dom";
import CourserRegister from '../components/student/CourserRegister';
import CoursesResultes from '../components/student/CoursesResultes';
import CoursesTable from '../components/student/CoursesTable';
import RegisterPoint from '../components/student/RegisterPoint';
import PublishResarsh from '../components/student/PublishResarsh';
import MainInfo from '../components/student/MainInfo';
import Material from '../components/student/Material';

function Student() {


  return (
    <div className="student" dir="rlt">
      <div className="header ">
        <div className="user my-2">
          <img
            src={require("../images/profile.png")}
            className="user_image ms-3"
            alt="profile"
          />
          <div className="user_info">
            <Link to="/profile">Maher Mustafa Ahmed</Link>
          </div>
        </div>
      </div>
      
      <div className="sidebar">
        <Link className="action" to="/student/maininfo">
          <img
            src={require("../images/personal-information.png")}
            alt="personal-information"
          />
          <div className="action_name">المعلومات الاساسية</div>
        </Link>
        <Link
          className="action"
          to="/student/coursesregister"
         
        >
          <img src={require("../images/course.png")} alt="course.png" />
          <div className="action_name">التسجيل الالكتروني</div>
        </Link>
        <Link className="action" to="/student/coursesresult">
          <img src={require("../images/exam.png")} alt="exam" />
          <div className="action_name">تقديرات المقرارات</div>
        </Link>
        <Link
          className="action"
          to="/student/coursestable"
         
        >
          <img src={require("../images/time-table.png")} alt="time-table.png" />
          <div className="action_name">الجدوال الدراسي</div>
        </Link>
        <Link
          className="action"
          to="/student/publishresearsh"
         
        >
          <img src={require("../images/document.png")} alt="document.png" />
          <div className="action_name">نشر بحث علمي</div>
        </Link>
        <Link
          className="action"
          to="/student/material"
         
        >
          <img src={require("../images/homework.png")} alt="material" />
          <div className="action_name">Material</div>
        </Link>
        <Link
          className="action"
          to="/student/rigesterpoint"
         
        >
          <img src={require("../images/checklist.png")} alt="" />
          <div className="action_name">تسجيل نقطة بحثية</div>
        </Link>
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/maininfo" element={<MainInfo />} />
          <Route path="/coursesregister" element={<CourserRegister />} />
          <Route path="/coursesresult" element={<CoursesResultes />} />
          <Route path="/coursestable" element={<CoursesTable />} />
          <Route path="/material" element={<Material />} />
          <Route path="/rigesterpoint" element={<RegisterPoint />} />
          <Route path="/publishresearsh" element={<PublishResarsh />} />
        </Routes>
        
      </div>
      
    </div>
  );
}

export default Student
