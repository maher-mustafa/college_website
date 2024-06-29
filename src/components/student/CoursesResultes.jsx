import React from 'react'
import { Table } from "react-bootstrap";

const courses = [
  {
    id: 1,
    name: "مادة 1",
    grade: "A",
    hours: 3,
  },
  {
    id: 2,
    name: "مادة 2",
    grade: "B",
    hours: 3,
  },
  {
    id: 3,
    name: "مادة 3",
    grade: "C",
    hours: 5,
  },
];
function CoursesResultes() {
  return (
    <div>
      <h2 className="drived-page-title">درجات المواد</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>المادة</th>
            <th>الساعات</th>
            <th>الدرجة</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.hours}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CoursesResultes
