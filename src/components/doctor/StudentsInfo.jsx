
import { Table } from "react-bootstrap";
import { handlePrint } from '../../utilities/commonFunc';

import "../../styles/doctor/main.css"

let students = [
  {
    id: 5,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
  {
    id: 12,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
  {
    id: 3,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
];
function StudentsInfo() {
  


  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">الطلاب المسجلين في المادة</h2>
        <Table id="studentsInfo">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>الإسم</th>
              <th>الصورة الشخصية</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <img
                    src={require("../../images/profile.png")}
                    alt=''
                    className='personal-photo'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
        <hr />
        <br />

        <button
          onClick={() => handlePrint("studentsInfo")}
          className="btn btn-primary"
        >
          طباعة
        </button>
      </div>
    </div>
  );
}

export default StudentsInfo
