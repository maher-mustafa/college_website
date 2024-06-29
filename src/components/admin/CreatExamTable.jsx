import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

import Cookie from "cookie-universal"

function CreatExamTable() {
  const cookies=Cookie()
  const [departments,setDepartments]=useState([])
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [filteredCourses,setFilteredCourses]=useState([])
    const [courses ,setCourses]=useState([])
    const [tableInfo, setTableInfo] = useState({
        levelId: "",
        departmentId: "",
        examDate: "",
        examTime: "",
        examName: "",
        examDuration: "",
        examHall: "",
})
    //  const filteredCourses = courses.filter(
    //    (course) =>
    //      course.levelId === tableInfo.levelId &&
    //      course.departmentName ===
    //        departments.filter(
    //          (dep) => dep.departmentId === tableInfo.departmentId
    //        ).departmentName
    //  );
     const handleCourseClick = (course) => {
         setSelectedCourses((prevCourses) => [...prevCourses, course]);
        setFilteredCourses(filteredCourses.filter((course)=>(course!=course)))
  };
 

  async function handleDepartmentChange(e) {
   
  }
  
    return (
      <div className="container row">
        <h2 className="drived-page-title">إنشاء جدول امتحانات</h2>

        <div className=" col-md-4">
          <form className="examTable-form">
            <div className="form-group">
              <label htmlFor="examLevel">المستوي الدراسي</label>
              <select
                className="form-control"
                id="examLevel"
                value={tableInfo.level}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, level: e.target.value })
                }
              >
                <option value={1}>المستوي الدراسي الاوال</option>
                <option value={2}>المستوي الدراسي الثاني</option>
                <option value={3}>المستوي الدراسي الثالث</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="examDepartment">القسم</label>
              <select
                className="form-control"
                id="examDepartment"
                value={tableInfo.departmentId}
                onChange={(e) =>handleDepartmentChange(e)}
              >
                {departments.map((item, index) => (
                  <option value={item.departmentId} key={index}>
                    {item.departmentName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="examName">اسم الامتحان</label>
              <input
                type="text"
                className="form-control"
                id="examName"
                value={tableInfo.examName}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, examName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="examDate">تاريخ الامتحان</label>
              <input
                type="date"
                className="form-control"
                id="examDate"
                value={tableInfo.examDate}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, examDate: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="examTime">وقت الامتحان</label>
              <input
                type="time"
                className="form-control"
                id="examTime"
                value={tableInfo.examTime}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, examTime: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="examDuration">مدة الامتحان</label>
              <input
                type="number"
                className="form-control"
                id="examDuration"
                min={0}
                value={tableInfo.examDuration}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, examDuration: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="examRoom">قاعة الامتحان</label>
              <input
                type="text"
                className="form-control"
                id="examRoom"
                value={tableInfo.examHall}
                onChange={(e) =>
                  setTableInfo({ ...tableInfo, examHall: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              إنشاء
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>الموادالمتاحة</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={index} onClick={() => handleCourseClick(course)}>
                  <td>{course.courseName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table">
            {/* {tableInfo.name ? (
              <tcaption>
                {tableInfo.name} {tableInfo.deparment}
              </tcaption>
            ) : (
              <tcaption className="mb-4">
                جدوال امتحانات الفصل الدراسي الاوال قسم {tableInfo.deparment}
              </tcaption>
            )} */}

            <thead>
              <tr>
                <th>التاريخ</th>
                <th>المادة </th>
                <th>الساعة</th>

                <th>مدة الامتحان</th>
                <th>القاعة</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourses.map((course, index) => {
               
                return (
                  <tr key={index}>
                    <td>{tableInfo.examDate}</td>
                    <td>{course.courseName}</td>
                    <td>{tableInfo.examTime}</td>
                    <td>{tableInfo.examDuration}</td>
                    <td>{tableInfo.examHall}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}




export default CreatExamTable
