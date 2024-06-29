import React from 'react'
import "../../styles/admin.css"
import { Link } from 'react-router-dom';
function Exams() {
  return (
    <div className="exam">
      <h2 className="drived-page-title">الاختبارات</h2>
      <div className="cards">
        <Link className="card red" to="/admin/creatTable">
          <p className="tip">انشاء جدوال امتحنات</p>
        </Link>
        <Link className="card blue" to="/admin/sitNumbers">
          <p className="tip">استخراج ارقام جلوس</p>
        </Link>
      </div>
    </div>
  );
}

export default Exams
