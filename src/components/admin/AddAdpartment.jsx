import React from 'react'
import"../../styles/admin/main.css"


function AddAdpartment() {
 

  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">اضافة قسم</h2>
        <form className="department-form" id="department-form">
          <div className="form-group">
            <label htmlFor="department-name">Department Name</label>
            <input
              type="text"
              className="form-control"
              id="department-name"
              name="departmentName"
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="level">Level</label>
            <select
              className="form-control"
              id="level"
              name="levelId"
             
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3"
          
          >
            تاكيد
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAdpartment
