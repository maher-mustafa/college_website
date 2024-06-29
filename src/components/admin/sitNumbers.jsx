import React, { useContext, useEffect, useState } from 'react'
import "../../styles/admin/main.css"
import axios from 'axios';
import { Button } from 'react-bootstrap';

let departments = [
  { id: 1, name: "العلوم والتكنولوجيا" },
  { id: 2, name: "الإدارة والتحكم" },
  { id: 3, name: "التصوير والتحليل الإعلامي" },
  { id: 4, name: "التاريخ والتراجمة" },
  { id: 5, name: "التربية والتعليم العام" },
  { id: 6, name: "العلوم الإيجبريائية" },
  { id: 7, name: "الأمن والحماية" },
];
let sitNumbers = [
  {
    id: 5,
    name: "alaa mahoud",
    sit:100
  },
  {
    id: 8,
    name: "khaled mahoud",
    sit:101
  },
  {
    id: 14,
    name: "zezo taha",
    sit:102
  },
  {
    id: 51,
    name: "mohamed hamada",
    sit:103
  },
  {
    id: 5,
    name: "alaa hassan",
    sit:104
  },
  {
    id: 5,
    name: "adel mustafa",
    sit:105
  },
]
function SitNumbers() {
    
    
    
    const [sitInfo, setSetInfo] = useState({
        levelId: "",
        departmentId: "",
        // term: "",
        start:""
    })
   function handleSubmit(e){
     e.preventDefault();
     

    }

  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">إنشاء ارقم جلوس</h2>
        <form className="sit-form mb-3">
          <div className="form-group">
            <label for="studentLevel my-5">المستوي الدراسي</label>
            <select
              className="form-control"
              id="studentLevel"
              value={sitInfo.levelId}
              onChange={(e) =>
                setSetInfo({ ...sitInfo, levelId: e.target.value })
              }
            >
              <option value="">اختر المرحلة الدراسية</option>*
              <option value={1}>المستوي الاوال</option>
              <option value={2}>المستوي الثاني</option>*
              <option value={3}>المستوي الثالث</option>*
            </select>
          </div>
          
          <div className="form-group">
            <label for="studentDepartment">القسم</label>
            <select
              className="form-control"
              id="studentDepartment"
              value={sitInfo.departmentId}
              onChange={(e) =>
                setSetInfo({ ...sitInfo, departmentId: e.target.value })
              }
            >
              {departments.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label for="studentStart">البداية</label>
            <input
              type="number"
              className="form-control"
              min={0}
              id="studentStart"
              value={sitInfo.start}
              onChange={(e) =>
                setSetInfo({ ...sitInfo, start: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleSubmit}
          >
            إنشاء
          </button>
        </form>
        <hr />
        <table className="table my-5" id="printElement">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>الإسم</th>
              <th>رقم المقعد</th>
            </tr>
          </thead>
          <tbody>
            {sitNumbers.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.sit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button
          variant="primary"
          onClick={() => handlePrint("printElement")}
          className="my-3"
        >
          طباعة
        </Button>
      </div>
    </div>
  );
}
//  console.log(couresInfo);
      //  axios.post(`${api}/apply`, couresInfo);
      
function clear(setFunc) {
  setFunc({
    level: "",
    department: "",
    semester: "",
    start: "",
  });
}
export default SitNumbers

  const handlePrint = async (element) => {
  
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
