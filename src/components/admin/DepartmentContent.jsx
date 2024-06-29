
import { Link, useLocation } from 'react-router-dom';
import { Tab, Nav, Table } from "react-bootstrap";
 import "../../styles/admin/main.css"

import Cookie from "cookie-universal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let courses = [
  {
  title: "database",
  hours: 3,
  min_end: 50,
  max_end: 100,
  code:"DC21"
  },
  {
  title: "database",
  hours: 3,
  min_end: 50,
  max_end: 100,
  code:"DC21"
  },
  {
  title: "database",
  hours: 3,
  min_end: 50,
  max_end: 100,
  code:"DC21"
  },
]
let students=[
  {
    name: "alaa mahmoud",
    phone: "01002336548",
    email:"alaa@gmail.com"

  },
  {
    name: "alaa mahmoud",
    phone: "01002336548",
    email:"alaa@gmail.com"

  },
  {
    name: "alaa mahmoud",
    phone: "01002336548",
    email:"alaa@gmail.com"

  },
]
let doctors = [
  {
    name: "khaled ali",
    code: "DC21",
    email:"khaled@gmail.com"
  },
  {
    name: "khaled ali",
    code: "DC21",
    email:"khaled@gmail.com"
  },
  {
    name: "khaled ali",
    code: "DC21",
    email:"khaled@gmail.com"
  },
]
function DepartmentContent(props) {
 
  const cookies=Cookie()
  
  const state = useLocation();
 
  const departmentName= state.state.departmentName;
  
  const handleDeleteCourse = async (id) => {
   alert("deleted")
  }
  const handleEdit =(id) => {
    alert("done")
  }
 
  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">{departmentName}</h2>

        <Tab.Container defaultActiveKey="courses">
          <div className="radio-button-container py-3">
            <Nav.Link eventKey="courses">
              <input
                type="radio"
                className="radio-button__input"
                id="radio3"
                name="radio-group"
                value={` مقرارات`}
              />
              <label className="radio-button__label" htmlFor="radio3">
                <span className="radio-button__custom"></span>
                مقرارات
              </label>
            </Nav.Link>
            <Nav.Link className="radio-button" eventKey="students">
              <input
                type="radio"
                className="radio-button__input"
                id="radio1"
                name="radio-group"
                value={` طالب`}
              />
              <label className="radio-button__label" htmlFor="radio1">
                <span className="radio-button__custom"></span>
                طالب
              </label>
            </Nav.Link>
            <Nav.Link className="radio-button" eventKey="doctors">
              <input
                type="radio"
                className="radio-button__input"
                id="radio2"
                name="radio-group"
                value={` دكتور`}
              />
              <label className="radio-button__label" htmlFor="radio2">
                <span className="radio-button__custom"></span>
                دكتور
              </label>
            </Nav.Link>
          </div>
          <br />
          <hr />
          <br />
          <Tab.Content>
            <Tab.Pane eventKey="courses">
              <h2 className="drived-page-title">المقرارات</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>اسم المادة</th>

                    <th>عدد الساعات</th>
                    <th>النهاية العظمة</th>
                    <th>النهاية الصغرة</th>
                    <th>كود المادة</th>
                    <th>حدف</th>
                    <th>تعديل</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.title}</td>
                      <td>{course.hours}</td>
                      <td>{course.max_end}</td>
                      <td>{course.min_end}</td>
                      <td>{course.code}</td>
                      <td>
                        <FontAwesomeIcon
                          className="edit-delet-icon"
                          icon="fa-solid fa-trash"
                          onClick={() => handleDeleteCourse(course.courseId)}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="edit-delet-icon"
                          icon="fa-solid fa-pen"
                          onClick={() => handleEdit(course.courseId)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        />
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <br />

              <Link className="btn btn-success" to="/admin/courses/newCourse">
                AddCourse
              </Link>

              <br />
            </Tab.Pane>
            <Tab.Pane eventKey="doctors">
              <h2 className="drived-page-title">الدكتور</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>الاسم</th>
                    <th>كود المادة</th>
                    <th>البريد الإلكتروني</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor, index) => (
                    <tr key={index}>
                      <td>{doctor.name}</td>
                      <td>{doctor.code}</td>
                      <td>{doctor.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab.Pane>
            <Tab.Pane eventKey="students">
              <h2 className="drived-page-title">الطلاب</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>الاسم</th>
                    <th>رقم التليفون</th>
                    <th>البريد الإلكتروني</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default DepartmentContent
