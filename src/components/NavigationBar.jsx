import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink, useNavigate } from "react-router-dom";
const NavigationBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/LoginPage");
  };

  return (
    <div>
      <nav class=" container navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <img src="src\assets\images\logo.png" width="335" height="55" />
          <button
            class="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class=" ali collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-mg-0 nav-1">
              <li class="nav-item1">
                <NavLink
                  style={{ listStyle: "none", textDecoration: "none" }}
                  class="nav-link active"
                  aria-current="page"
                  to="#"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ listStyle: "none", textDecoration: "none" }}
                  class="nav-link"
                  aria-current="page"
                  to="#"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ listStyle: "none", textDecoration: "none" }}
                  class="nav-link "
                  aria-current="page"
                  to="#"
                >
                  Price
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ listStyle: "none", textDecoration: "none" }}
                  class="nav-link "
                  aria-current="page"
                  to="#"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="btn-1">
              <button
                class="btn btn-primary btn1 "
                onClick={handleLogin}
                type="button"
              >
                Log in
              </button>
              <button class="btn btn-primary btn2" type="submit">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
