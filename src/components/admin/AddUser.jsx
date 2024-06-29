import React, { useEffect, useState } from 'react'
import "../../styles/admin/main.css"

import AplyAplication from '../../pages/AplyAplication'
let departments = [
  { id: 1, name: "العلوم والتكنولوجيا" },
  { id: 2, name: "الإدارة والتحكم" },
  { id: 3, name: "التصوير والتحليل الإعلامي" },
  { id: 4, name: "التاريخ والتراجمة" },
  { id: 5, name: "التربية والتعليم العام" },
  { id: 6, name: "العلوم الإيجبريائية" },
  { id: 7, name: "الأمن والحماية" },
];


function AddUser() {
  
    const [role,setRole]=useState(false)
   
  return (
    <div className="py-3">
      <div className="container">
        <h2 className="drived-page-title">إضافة مستخدم</h2>

        <div className="radio-button-container py-3">
          <div className="radio-button">
            <input
              type="radio"
              className="radio-button__input"
              id="radio1"
              name="radio-group"
              value={` طالب`}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="radio-button__label" htmlFor="radio1">
              <span className="radio-button__custom"></span>
              طالب
            </label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              className="radio-button__input"
              id="radio2"
              name="radio-group"
              value={`دكتور`}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="radio-button__label" htmlFor="radio2">
              <span className="radio-button__custom"></span>
              دكتور
            </label>
          </div>
        </div>
        {role === " طالب" ? (
          <AplyAplication />
        ) : (
          <form className="addUser-form" id="newUser-form">
            <div className="form-group">
              <label htmlFor="userName">الإسم الكامل</label>
              <input
                type="text"
                className="form-control"
                id="userName"
              name='fullName'
              />
            </div>
            <div className="form-group">
              <label htmlFor="nid">الرقم القومي</label>
              <input
                type="text"
                className="form-control"
                id="nid"
             name='NID'
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">رقم الهاتف</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name='phoneNumber'
              />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail">البريد الإلكتروني</label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
               name='email'
              />
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">كلمة المرور</label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                name='password'
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">القسم</label>
              <select
                className="form-control"
                id="department"
               name='departmentDepartmentId'
              >
                {departments.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="courseCode">كود المادة</label>
              <input
                type="text"
                className="form-control"
                id="courseCode"
                name='courseCourseId'
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary my-3"
              
            >
              إضافة
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddUser
