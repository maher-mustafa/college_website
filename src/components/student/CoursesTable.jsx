import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";


const schedule = [
  {
    id: 1,
    day: "الاحد",
    subject: "اللغة العربية",
    teacher: "احمد محسن",
    time: "9:00 - 10:00",
  },
  {
    id: 2,
    day: "الاثنين",
    subject: "الرياضيات",
    teacher: "علي عبدالله",
    time: "10:00 - 11:123",
  },
  {
    id: 3,
    day: "الثلاثاء",
    subject: "علوم",
    teacher: "سليمان علي",
    time: "11:00 - 12:00",
  },
];
function CoursesTable() {
    const dates = [
      "السبت",
      "الاحد",
      "الاثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
    ];
 

 
  return (
    <div>
      <h2 className="drived-page-title">جدول الدروس</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>اليوم</th>
            <th>8-10 </th>
            <th>10-12</th>
            <th>12-2 </th>
            
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, index) => (
            <tr key={index}>
              <td>{dates[index]}</td>
              <td>
                {
                  <>
                    <div>{day.subject}</div>
                  
                  </>
                }
              </td>
              <td></td>
              <td></td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default CoursesTable
