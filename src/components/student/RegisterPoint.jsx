
import { useState } from "react";
import { Button, Form } from "react-bootstrap";



function RegisterPoint() {
  const [researchPoints, setResearchPoints] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    

  
  }
  const handleRecord = (researchPoint) => {
    setResearchPoints(researchPoint);
   
  };
  return (
    <div>
      <h2 className="drived-page-title">تسجيل نقطة بحثية</h2>
      <Form
        id="research-form"
        onSubmit={handleSubmit}
        className="border p-3 mt-4 rounded bg-light"
      >
        <Form.Group controlId="title">
          <Form.Label>العنوان</Form.Label>
          <Form.Control type="text" name="title" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>الوصف</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-5" onClick={handleRecord}>
          تسجيل
        </Button>
      </Form>
      <h2 className="drived-page-title">النقاط البحثية المسجلة</h2>

      <h4> {researchPoints.title}</h4>
      <p> {researchPoints.description}</p>
      {/* <ul>
        {researchPoints.map((researchPoint) => (
          <li key={researchPoint.title}>
            {researchPoint.title} ({researchPoint.description})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default RegisterPoint;
