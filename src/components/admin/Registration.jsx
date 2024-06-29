function Registration() {
  
  const handleSubmit = async(e) => {
    e.preventDefault();
 
alert("registration started")

  }
 
  return (
    <div>
      <h2 className="drived-page-title">بداء التسجيل</h2>
      <div className="registration">
        <form id='registrationTime-form'>
          <div className="input-group row">
            <label htmlFor="startdate" className="col-sm-4 col-form-label">
              تاريخ لبدء:{" "}
            </label>
            <div className="col-sm-8">
              <input
                type="date"
                id="startdate"
                
                name="startDate"
              />
            </div>
          </div>
          <div className="input-group row">
            <label htmlFor="enddate" className="col-sm-4 col-form-label">
              تاريخ الانتهاء:{" "}
            </label>
            <div className="col-sm-8">
              <input
                type="date"
                id="enddate"
                name="endDate"
                dir="rtl"
               
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary my-4" onClick={handleSubmit}>
            بداء
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration
