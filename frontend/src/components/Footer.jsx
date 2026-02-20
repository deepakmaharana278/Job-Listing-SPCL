import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-2">JobPortal</h5>
            <p className="small mb-0">
              Find top tech jobs across India and grow your career.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/jobs" className="text-light text-decoration-none">Jobs</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2">Contact</h6>
            <p className="small mb-1">support@jobportal.com</p>
            <p className="small mb-0">+91 8984056080</p>
          </div>

        </div>

        <hr className="border-secondary my-3" />
        <div className="text-center small">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer