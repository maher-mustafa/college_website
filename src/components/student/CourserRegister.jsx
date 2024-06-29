import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button,Table } from "react-bootstrap";

let courses = [
  {
    title: "database",
    hours: 3,
    min_end: 50,
    max_end: 100,
    code: "DC21",
  },
  {
    title: "database",
    hours: 3,
    min_end: 50,
    max_end: 100,
    code: "DC21",
  },
  {
    title: "database",
    hours: 3,
    min_end: 50,
    max_end: 100,
    code: "DC21",
  },
];

function CourserRegister(props) {
 
  const dates = ["السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"];
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
 
  
  const handleRegister = (course) => {
    setSelectedCourses((prevCourses) => {
      const newCourses = [...prevCourses];
      if (!newCourses.some((c) => c.courseId === course.courseId)) {
        newCourses.push(course);

      }
      else {
        alert("You are already registered for this course");
      }
      return newCourses;
    });
  };

  const handleUnregister = (course) => {
    setSelectedCourses((prevCourses) =>
      prevCourses.filter((c) => c.id !== course.id)
    );
  };
  
  const handleSave =async () => {
  
    alert("تم تسجيل المواد بنجاح")
  }
   


  return (
    <div>
      <h2 className="drived-page-title">تسجيل المواد</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>اسم المادة</th>
         
            <th>عدد الساعات</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course,index) => (
            <tr key={index}>
              <td
                onClick={() => handleRegister(course)}
                className="course_name"
              >
                {course.title}
              </td>
            
              <td>{course.hours}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Table striped bordered hover id="printElement">
        <thead>
          <tr>
            <th>اليوم</th>
            <th>اسم المادة</th>
            
            <th>عدد الساعات</th>
          </tr>
        </thead>
        <tbody>
          {selectedCourses.map((course,index) => (
            <tr key={index}>
              <td>{dates[index]}</td>
              <td
                onClick={() => handleUnregister(course)}
                className="course_name"
              >
                {course.title}
              </td>
             
              <td>{course.hours}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        onClick={() => handlePrint("printElement", selectedCourses)}
        className="mx-3"
      >
        Print
      </Button>
      <Button variant="primary" onClick={handleSave} className="mx-3">
        Save
      </Button>
    </div>
  );
}

  const handlePrint = async (element,data) => {
    if (data.length == 0) {
      alert("Please select courses to print");
      return false;
    }
    // window.print();
    const printContent = document.getElementById(element);
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
    <!DOCTYPE html >
    <html dir="rtl" lang="ar">
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <style>
          /* Include any custom styles here */
        </style>
      </head>
      <body>
        ${printContent.outerHTML}
      </body>
    </html>
  `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    setTimeout(() => {
      printWindow.close();
    }, 1000);
  };

export default CourserRegister;
