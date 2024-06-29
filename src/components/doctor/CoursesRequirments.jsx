import React, { useEffect, useState } from 'react'
import "../../styles/doctor/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CoursesRequirments() {
 
  const [ storedFiles, setStoredFiles]=useState([])
  const handleFileChange = async (e) => {
    

  
  };
  
 const handleFileDelete =() => {
  
 };

  return (
    <div>
      <div className="container">
        <h2 className="drived-page-title">تحميل متطلبات المادة</h2>
        <form id="requirements-form">
          <div className="form-group">
            <label htmlFor="courseRequirments">
              <FontAwesomeIcon
                icon="fa-solid fa-cloud-arrow-up"
                className="form-control-icon"
              />
            </label>
            <input
              type="file"
              className="form-control-file"
              id="courseRequirments"
              name="requirement"
              onChange={handleFileChange}
              multiple
            />
          </div>
        </form>
        <br />
        <hr />
        <br />
        <div className="my-3 uploads">
          <h2>الملفات المحملة</h2>
          <ul className="uploads-list">
            {storedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.requirement}</span>
                <div>
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash"
                    onClick={() => handleFileDelete()}
                    className="mx-3 delet-icon"
                  />

                  <a
                    href={`http://localhost:3001/uploads/${file.requirement}`}
                    download={file.requirement}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-download" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoursesRequirments
