import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios';
import { UPDATE_DEPARTMENT } from './Apis';
import Cookie from "cookie-universal"
function Model(props) {

 const [department, setDepartment] = useState({
   departmentName: "",
   phase:""
 });
   console.log("depo",props.departmentinfo);
    const cookies=Cookie()
  const update = async () => {
    let form = document.getElementById("updates");
    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    if (data.departmentName !== "" && data.levelId !== "") {
      console.log(data);
      await axios
        .put(
          `${UPDATE_DEPARTMENT}/${props.departmentinfo.departmentId}`,data)
        .then((res) => {
          console.log(res.data);
             
        }).catch(e => { console.log(e) })
    
    }
  }

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
              <form id="updates">
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="department"
                    aria-label="title"
                    name="departmentName"
                    
                  />
                </div>
                <div className="my-3">
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

export default Model
