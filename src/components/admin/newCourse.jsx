import React, { useEffect, useState } from "react";
import "../../styles/admin/main.css"


let departments = [
  { id: 1, name: "العلوم والتكنولوجيا" },
  { id: 2, name: "الإدارة والتحكم" },
  { id: 3, name: "التصوير والتحليل الإعلامي" },
  { id: 4, name: "التاريخ والتراجمة" },
  { id: 5, name: "التربية والتعليم العام" },
  { id: 6, name: "العلوم الإيجبريائية" },
  { id: 7, name: "الأمن والحماية" },
];



function AddCourse() {


  const handleSubmit = async(e) => {
alert("add successfully")
  }
 
  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">إضافة مقرار جديد</h2>
        <form className="add-course" dir="auto" id="newCourse-form">
          {" "}
          <div className="form-group arname">
            <label htmlFor="courseName">اسم المادة</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseNameArabic"
            />
          </div>
          <div className="form-group enname">
            <label htmlFor="EncourseName">(English)اسم المادة</label>
            <input
              type="text"
              className="form-control"
              id="EncourseName"
              name="courseName"
            />
          </div>
          <div className="form-group houers">
            <label htmlFor="courseHours ">عدد الساعات</label>
            <input
              type="number"
              className="form-control"
              id="courseHours"
            name="numberHours"
            />
          </div>
          <div className="form-group min">
            <label htmlFor="courseSmallGrade">النهاية الصغرى</label>
            <input
              type="number"
              className="form-control"
              id="courseSmallGrade"
            name="minorEnd"
            />
          </div>
          <div className="form-group dep">
            <label htmlFor="department">القسم</label>
            <select
              className="form-control"
              id="department"
             name="departmentDepartmentId"
            >
              {departments.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
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
             name="greatEnd"
            />
          </div>
          <div className="form-group Encode">
            <label htmlFor="courseCodeEn ">كود المادة(English)</label>
            <input
              type="text"
              className="form-control"
              id="courseCodeEn"
            name="courseId"
            />
          </div>
          <div className="form-group level">
            <label htmlFor="courseLevel">المستوي الدراسي</label>
            <select
              className="form-control"
              id="courseLevel"
             name="levelId"
            >
              <option value={1}>المستوي الدراسي الاوال</option>
              <option value={2}>المستوي الدراسي الثاني</option>
              <option value={3}>المستوي الدراسي الثالث</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary add h-50 mt-5"
            onClick={handleSubmit}
          >
            إضافة
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
