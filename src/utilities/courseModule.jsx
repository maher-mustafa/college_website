import React, { useEffect, useState } from "react";

import axios from "axios";
import { GET_ALL_DEPARTMENTS, GET_COURSE_BY_ID, UPDATE_COURSE} from "./Apis";

function CourseModel(props) {
    
  const [course, setCourses] = useState({});
  const [departments,setDepartments]=useState([])
  const update = async () => {
      console.log("id", course);
      const response = await axios.put(`${UPDATE_COURSE}/${props.data.courseId}`, course).then(res => {
          console.log(res.data);
      }).catch(error => {
          console.log(error);
      })
  };
    useEffect(() => {
        async function getData(api, setFunc) {
            
            const res = await axios.get(`${api}`).then(response => {
                setFunc(response.data.data)
                console.log("model",response.data)
            }).catch(error => {
                console.log(error)
            })
        }
        getData(`${GET_COURSE_BY_ID}/${props.data.departmentId}/${props.data.courseId}`, setCourses);
        getData(`${GET_ALL_DEPARTMENTS}`,setDepartments)
},[props.data.courseId])
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="add-course" dir="auto" id="edit-form">
                {" "}
                <div className="form-group arname">
                  <label htmlFor="courseName">اسم المادة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    value={course.courseNameArabic}
                    onChange={e=>{setCourses({...course,courseNameArabic:e.target.value})}}
                  />
                </div>
                <div className="form-group enname">
                  <label htmlFor="EncourseName">(English)اسم المادة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="EncourseName"
                    value={course.courseName}
                    onChange={(e) =>
                      setCourses({ ...course, courseName: e.target.value })
                    }
                  />
                </div>
                <div className="form-group houers">
                  <label htmlFor="courseHours ">عدد الساعات</label>
                  <input
                    type="number"
                    className="form-control"
                    id="courseHours"
                    value={course.numberHours}
                    onChange={(e) =>
                      setCourses({ ...course, numberHours: e.target.value })
                    }
                  />
                </div>
                <div className="form-group min">
                  <label htmlFor="courseSmallGrade">النهاية الصغرى</label>
                  <input
                    type="number"
                    className="form-control"
                    id="courseSmallGrade"
                    value={course.minorEnd}
                    onChange={(e) =>
                      setCourses({ ...course, minorEnd: e.target.value })
                    }
                  />
                </div>
                <div className="form-group dep">
                  <label htmlFor="department">القسم</label>
                  <select
                    className="form-control"
                    id="department"
                    value={course.departmentId}
                    onChange={(e) =>
                      setCourses({ ...course, departmentId: e.target.value })
                    }
                  >
                    <option value={course.departmentId}>
                      {course.departmentId}
                    </option>
                    {departments.map((item, index) => (
                      <option value={item.departmentId} key={index}>
                        {item.departmentName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group max">
                  <label htmlFor="courseBigGrade ">النهاية العظمى</label>
                  <input
                    type="number"
                    className="form-control"
                    id="courseBigGrade"
                    value={course.greatEnd}
                    onChange={(e) =>
                      setCourses({ ...course, greatEnd: e.target.value })
                    }
                  />
                </div>
                <div className="form-group Encode">
                  <label htmlFor="courseCodeEn ">كود المادة(English)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseCodeEn"
                    value={course.courseId}
                    onChange={(e) =>
                      setCourses({ ...course, courseId: e.target.value })
                    }
                  />
                </div>
                <div className="form-group level">
                  <label htmlFor="courseLevel">المستوي الدراسي</label>
                  <select
                    className="form-control"
                    id="courseLevel"
                    value={course.levelId}
                    onChange={(e) =>
                      setCourses({ ...course, levelId: e.target.value })
                    }
                  >
                    <option value={1}>المستوي الدراسي الاوال</option>
                    <option value={2}>المستوي الدراسي الثاني</option>
                    <option value={3}>المستوي الدراسي الثالث</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={update}
              >
                حفظ التعديلات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseModel;
