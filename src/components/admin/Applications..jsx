
import { Table,Button } from "react-bootstrap";

let applications = [
  {
    id: 1,
    name: "mohamed hassan",
    age: 26,
    college: "Computer and information system",
    dep:"computer science"
  },
  {
    id: 1,
    name: "ali hassan",
    age: 24,
    college: "الهندسة",
    dep:"الهندسة الحيوية"
  },
  {
    id: 1,
    name: "علاء جابر",
    age: 27,
    college: "العلوم",
    dep:"physics"
  }
]
function Applications() {
  

 const handleAccept = () => {

  alert("accepted")

 };

 const handleReject =async (id) => {
 
  alert("rejected")
  };
  
  return (
    <div>
      <h2 className="drived-page-title">طلابات الالتحاق</h2>
    {applications.length>0?( <Table striped bordered hover>
        <thead>
          <tr>
            <th>اسم الطالب</th>
           

            <th>الكلية</th>
            <th>التخصص</th>
            <th>قبوال/رفض</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application,index) => (
            <tr key={index}>
              <td>{application.fullName}</td>
             
              <td>{application.college}</td>
              <td>{application.specialization}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleAccept(application.studentId)}
                >
                  قبول
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleReject(application.studentId)}
                >
                  رفض
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>):"لا يوجد طلابات"}

     
    </div>
  );
}

export default Applications
