import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          JobPortal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Register</Link>
            </li>


          </ul>
        </div>
        

      </div>
    </nav>
  );
}

export default Navbar;