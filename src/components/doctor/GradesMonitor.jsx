
let students = [
  {
    id:5,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
  {id:12,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
  {id:3,
    name: "alaa mahmoud",
    phone: "01002336548",
    email: "alaa@gmail.com",
  },
];
function GradesMonitor() {

 
 
  
  const saveGrade = async(e) => {
    e.preventDefault();
   alert("saved")
  }

  return (
    <div className="container">
      <h2 className="drived-page-title">رصد الدرجات</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>كود الطالب</th>
            <th>الاسم</th>
            <th>كود المادة</th>
            <th>الدرجة</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>DC21</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveGrade} className="btn btn-primary mt-4">
        حفظ الدرجات
      </button>
    </div>
  );
}

export default GradesMonitor
