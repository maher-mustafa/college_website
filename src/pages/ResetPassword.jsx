
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../styles/login.css"
function ResetPassword() {
     const [email, setEmail] = useState("");
     const [showSuccessAlert, setShowSuccessAlert] = useState(false);

     const handleSubmit = (e) => {
       e.preventDefault();
       // Handle form submission here
       setShowSuccessAlert(true);
     };
  return (
    <div className="login-container">
      <div className="reset-password pt-4 pb-2">
        <h3>Forgot Password</h3>
        <Form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="label">
              <label className="col-form-label">البريد الالكتروني</label>
            </div>

            <div className="input">
              {" "}
              <input
                dir="ltr"
                type="text"
                className=" m-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </div>

          <Button variant="primary" type="submit" className="my-2">
            Submit
          </Button>
        </Form>
        {showSuccessAlert && (
          <Alert variant="success">
            <p>
              An email has been sent to {email} with instructions to reset your
              password.
            </p>
          </Alert>
        )}
      </div>
    </div>
  );
}

export default ResetPassword
