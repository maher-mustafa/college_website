
import { Table} from "react-bootstrap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/admin.css"


let departments = [
  { id: 1, name: "العلوم والتكنولوجيا" },
  { id: 2, name: "الإدارة والتحكم" },
  { id: 3, name: "التصوير والتحليل الإعلامي" },
  { id: 4, name: "التاريخ والتراجمة" },
  { id: 5, name: "التربية والتعليم العام" },
  { id: 6, name: "العلوم الإيجبريائية" },
  { id: 7, name: "الأمن والحماية" },
];
function Departments() {
 

  const handleEdit = (depId) => {
alert("done")
  };

  const handleDelete =async (departmentId) => {
    const del = window.confirm("تاكيد الحذف")
    
  };


  return (
    <div>
      <h2 className="drived-page-title">الاقسام</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>القسم</th>
            <th>المرحلة</th>
            <th>حذف</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>
                <Link
                  to={`/admin/departments/${department.departmentName}`}
                  state={{
                  
                    departmentName: department.name,
                  }}
                >
                  {department.name}
                </Link>
              </td>
              <td>2</td>
              <td>
                <FontAwesomeIcon
                  className="edit-delet-icon"
                  icon="fa-solid fa-trash"
                  onClick={() => handleDelete(department.departmentId)}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  className="edit-delet-icon"
                  icon="fa-solid fa-pen"
                  onClick={() => handleEdit(department)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/admin/newdepartment">add</Link>

     
    </div>
  );
}

export default Departments;
