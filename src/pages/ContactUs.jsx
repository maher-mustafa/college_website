import React from 'react'

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <h1 className="main-header">اتصل بنا</h1>
        <div className="row">
          <div className="col-md-6">
            <form className='contact-form'>
              <div className="form-group">
                <label htmlFor="formName" className="my-2">
                  الإسم الكامل
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formName"
                  placeholder="أدخل الإسم الكامل"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formEmail" className="my-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formEmail"
                  placeholder="أدخل البريد الإلكتروني"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formPhone" className="my-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="formPhone"
                  placeholder="أدخل رقم الهاتف"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formMessage" className="my-2">
                  الرسالة
                </label>
                <textarea
                  className="form-control"
                  id="formMessage"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-3">
                إرسال
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h2>معلومات الاتصال</h2>
            <p>الكلية الجامعية، شارع العلم، المنيا، مصر</p>
            <p>هاتف: 0123456789</p>
            <p>
              بريد إلكتروني:{" "}
              <a href="mailto:info@college.edu">info@college.edu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs
