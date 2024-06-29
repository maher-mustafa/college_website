import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom';
import Cookie from "cookie-universal"
function NavBar() {
  const cookies = Cookie()
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    if (cookies.get("token")) {
      setUser(cookies.get("token"));
    }
  }, [cookies.get("token")]);
  
  function logout() {
    cookies.remove("token")
    setUser(null)

  }
  return (
    <div>
      <div className="banner d-flex justify-content-between">
        <h3>قطاع الدرسات العليا جا معة المنيا</h3>
        {user? (
          <button className="btn btn-primary" onClick={logout}>
            تسجل خروج
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary">
            تسجل دخول
          </Link>
        )}

      </div>

      <div className="nav-parent">
        <nav id="mainNav" className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link js-scroll-trigger" to="/">
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="/registeration"
                >
                  التقديم الالكتروني
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link js-scroll-trigger dropdown"
                  to="/conditions"
                >
                  شروط التقديم
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link js-scroll-trigger dropdown"
                  to="/contact"
                >
                  اتصل بنا
                  <i className="fa fa-caret-down"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar
