
import React, { useState,useContext } from "react";
import{Link, useNavigate}from "react-router-dom"
import "../styles/login.css"

function LoginPage() {
  
    const [error,seError]=useState()
    return (
      <div className="login-container">
        <div className="login p-3">
          <h3>تسجيل الدخول</h3>
          <form dir="rtl" id="login-form">
            <div className="input-group">
              <div className="label">
                <label className="col-form-label">اسم المستخدم</label>
              </div>

              <div className="input">
                <input dir="auto" type="text" className="m-3" name="userName" />
                {error ? (
                  <p className="text-danger">
                    اسم المستخدم او كلمة الدخول غير صحيحة
                  </p>
                ) : null}
              </div>
            </div>
            <div className="input-group ">
              <div className="label">
                <label className="col-form-label">كلمة الدخول</label>
              </div>

              <div className="input">
                {" "}
                <input
                  dir="auto"
                  type="password"
                  name="password"
                  className=" m-3"
                />
              </div>
            </div>
            <div className="radio-button-container py-3">
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radio1"
                  name="role"
                  value={"student"}
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
                  name="role"
                  value={"doctor"}
                />
                <label className="radio-button__label" htmlFor="radio2">
                  <span className="radio-button__custom"></span>
                  دكتور
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radio3"
                  name="role"
                  value={"admin"}
                />
                <label className="radio-button__label" htmlFor="radio3">
                  <span className="radio-button__custom"></span>
                  ادمن
                </label>
              </div>
            </div>
            <div className="row">
              <Link to="/reset-password">نسيت كلمة المرور؟</Link>
            </div>
            <div className="mt-2">
              <button  className="btn btn-primary">
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default LoginPage
