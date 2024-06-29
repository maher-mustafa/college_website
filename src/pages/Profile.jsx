
import React from 'react'

import "../styles/home.css"
function Profile() {
  
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4 mb-2">
            <img
              src={require("../images/profile.png")}
              className="PersonalImage"
              alt="PersonalImage"
            />
            <input type='file' id='new-img' />
            <label htmlFor='new-img' className='edit-image'>edit</label>
          </div>
          <div className="col-md-8 mt-5">
            <h2>Maher Mustafa Ahmed</h2>
            <p>Age : <span>21</span></p>
            <p>
              <a href="mailto:email@example.com">mahr51202@gmail.com</a>
            </p>
            <p>Address :<span>cairo</span></p>
            <p>Phone Number : <span>01007994012</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
