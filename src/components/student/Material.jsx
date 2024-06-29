import React, {  useState } from 'react'
import {Row,Col,Form,FormGroup} from "react-bootstrap";
import "../../styles/student/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
let material = [
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

function Material() {
   
  
  // const [material,SetMaterial]=useState([])
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const handleCourseChange = async (e) => {

  }
  
  
  return (
    <div className="mb-4">
      <div className="container">
        <h1>Material</h1>
        <Form>
          <FormGroup>
            <Form.Label htmlFor="courseName">اسم المادة</Form.Label>
            <Form.Select
              id="courseName"
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              <option value="">اختر المادة</option>
              {courses.map((course, index) => (
                <option key={index} value={course.code}>
                  {course.title}
                </option>
              ))}
            </Form.Select>
          </FormGroup>
        </Form>
        <br />
        <hr />
        <br />
        <Row>
          {material.map((material, index) => (
            <Col key={index} sm="10" md="5" lg="4" className="mb-3">
              <div className="card mb-3 course-card">
                <div className="course-download">
                  <div className="dropdown">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="down"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-ellipsis-vertical"
                        className="ellipsis-icon"
                      />
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                      
                        >
                          تنزيل
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img
                      src={require("../../images/homework.png")}
                      className=" rounded-start course-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{material.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Material
