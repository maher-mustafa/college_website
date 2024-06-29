import React from 'react'
import { Table } from "react-bootstrap";
import "../../styles/student/mainInfo.css"
const student = {
  id: 1,
  name: "احمد محسن",
  email: "john.doe@example.com",
  age: 18,
  gpa: 3.5,
  credits: 120,
  college: "حاسبات المنيا",
  major: "Major 1",
};


function MainInfo() {







  
  return (
    <div dir="rtl">
      <h2 className='my-3 drived-page-title'>بيانات الطالب</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <h4>الاسم:</h4>
            </td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <td>
              <h4>البريد الالكتروني:</h4>
            </td>
            <td>{student.email}</td>
          </tr>
          <tr>
            <td>
              <h4>العمر:</h4>
            </td>
            <td>{student.age}</td>
          </tr>
          <tr>
            <td>
              <h4>المعدل التراكمي:</h4>
            </td>
            <td>{student.gpa}</td>
          </tr>
          
          <tr>
            <td>
              <h4>الكلية:</h4>
            </td>
            <td>{student.college}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h4>التخصص:</h4> {student.major}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MainInfo
