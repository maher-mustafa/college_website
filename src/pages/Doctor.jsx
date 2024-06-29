import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import StudentsInfo from '../components/doctor/StudentsInfo'
import GradesMonitor from '../components/doctor/GradesMonitor';
import CoursesRequirments from '../components/doctor/CoursesRequirments';


function Doctor() {
  

  return (
    <div className="admin" dir="rlt">
      <div className="header ">
        <div className="user my-2">
          <img
            src={require(`../images/profile.png`)}
            className=".user_image ms-3"
            alt="doctor"
          />
          <div className="user_info">
            <Link to="/profile" >Maher Mustafa Ahmed</Link>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <Link
          className="action"
          to="/doctor/students"
         
        >
          <img src={require("../images/teamwork.png")} alt="none" />
          <div className="action_name">عرض الطلاب</div>
        </Link>
        <Link
          className="action"
          to="/doctor/coursesrequirment"
         
        >
          <img src={require("../images/upload.png")} alt="none" />
          <div className="action_name">محتويات المادة</div>
        </Link>
        <Link
          className="action"
          to="/doctor/GradesMonitor"
       
        >
          <img src={require("../images/exam.png")} alt="none" />
          <div className="action_name">رصد النتائج</div>
        </Link>
       
      </div>
      <div className="mainContent">
        <Routes>
          <Route index path="/students" element={<StudentsInfo />} />
          <Route path="/GradesMonitor" element={<GradesMonitor />} />
          <Route path="/coursesrequirment" element={<CoursesRequirments />} />

        </Routes>
      </div>
    </div>
  );
}

export default Doctor
