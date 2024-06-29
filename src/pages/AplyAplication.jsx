import { useState } from "react";

let departments = [
  { id: 1, name: "العلوم والتكنولوجيا" },
  { id: 2, name: "الإدارة والتحكم" },
  { id: 3, name: "التصوير والتحليل الإعلامي" },
  { id: 4, name: "التاريخ والتراجمة" },
  { id: 5, name: "التربية والتعليم العام" },
  { id: 6, name: "العلوم الإيجبريائية" },
  { id: 7, name: "الأمن والحماية" },
  
]
function AplyAplication() {
  const[allowed,setAllowed]=useState(true)

  return (
    <div className="application-form">
      <div className="container">
        <h1 className="main-header">طلب الالتحاق بالدراسات العليا</h1>
        {allowed=== false ? (
          <h2 className="main-header">السجيل غير متاح</h2>
        ) : (
          <form id="application-form">
            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="studentName">الإسم الكامل</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  name="fullName"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="studentName">الرقم القومي</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  name="NID"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="studentEmail">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="form-control"
                  id="studentEmail"
                  name="email"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="studentPhone">رقم الهاتف</label>
                <input
                  type="tel"
                  className="form-control"
                  id="studentPhone"
                  pattern="[0-9]{3}-?[0-9]{2}-?[0-9]{3}"
                  title="يجب أن يحتوي على صيغة 123-456-7890"
                  name="phoneNumber"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="qualification">المؤهل العلمي</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification"
                  name="qualification"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="qualificationDate">تاريخ المؤهل</label>
                <input
                  type="date"
                  className="form-control"
                  id="qualificationDate"
                  name="qualificationDate"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="college">الكلية</label>
                <select className="form-control" id="college" name="college">
                  <option value="">اختر الكلية</option>
                  <option value="computer-science">كلية العلوم</option>
                  <option value="engineering">كلية الحاسبات والمعلومات</option>
                  <option value="engineering">كلية الهندسة</option>
                  <option value="commerce">كلية التجارة</option>
                  <option value="law">كلية الحقوق</option>
                  <option value="medicine">كلية الطب</option>
                  <option value="pharmacy">كلية الصيدلة</option>
                  <option value="dentistry">كلية طب الأسنان</option>
                  <option value="nursing">كلية التمريض</option>
                  <option value="education">كلية التربية</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="program">برنامج الدراسات العليا</label>
                <select className="form-control" id="program" name="program">
                  <option value="">اختر برنامج الدراسات العليا</option>
                  <option value="master">ماجستير</option>
                  <option value="phd">دكتوراه</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="specialization">التخصص</label>
                <select
                  className="form-control"
                  id="specialization"
                    name="departmentId"
                    
                >
                  <option value="">اختر التخصص</option>
                  {departments.map((item, index) => (
                    <option value={item.id} key={index} >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="militaryStatus">الموقف من التجنيد</label>
                <select
                  className="form-control"
                  id="militaryStatus"
                  name="militaryStatus"
                >
                  <option value="">اختر الموقف من التجنيد</option>
                  <option value="completed">مكتملا</option>
                  <option value="postponed">مؤجل</option>
                  <option value="exempt">معفى</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="fileUpload">صورة شخصية</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="fileUpload"
                  name="profilePicture"
                />
              </div>
              <div className="form-group col-md-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-4"
                  
                >
                  تسجيل
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AplyAplication
