import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const NavigationBar = () => {
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="nav-link " aria-current="page" href="#">
                  Price
                </a>
              </li>
              <li>
                <a class="nav-link " aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="btn-1">
              <button class="btn btn-primary btn1 " type="submit">
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
