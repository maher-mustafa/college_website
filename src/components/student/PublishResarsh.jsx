import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/student/main.css"

function PublishResarsh() {

  const [file, setFile] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
  };
const handleFileDelete = async() => {
  alert("deleted")
};
  const handleFileChange = async() => {
    

  };
  
  return (
    <div className="mb-5">
      <h2 className="drived-page-title">نشر بحث</h2>
      <Form id="research-form">
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
            name="research"
            onChange={handleFileChange}
          />
        </div>
      </Form>
      <br />
      <hr />
      <br />
      <div>
        <h2 className="mt-3 mb-5">البحوث المنشورة</h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                البحوث المنشورة
                <FontAwesomeIcon icon="fa-solid fa-folder-open" />
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <ul className="uploads-list ">
                  {file.map((file, index) => (
                    <li key={index}>
                      <span>{file.research}</span>
                      <div>
                        <FontAwesomeIcon
                          icon="fa-solid fa-trash"
                          onClick={() => handleFileDelete()}
                          className="mx-3 delet-icon"
                        />

                        <a
                          href="#"
                          download={file.research}
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
        </div>
      </div>
    </div>
  );
}

export default PublishResarsh;
