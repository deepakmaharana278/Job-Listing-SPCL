import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center border-bottom">
        <div className="container">
          <h1 className="fw-bold mb-3">About JobPortal</h1>
          <p className="text-muted lead">
            Connecting job seekers with the right opportunities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-3">Our Mission</h3>
          <p className="text-muted">
            Our mission is to simplify the job search process for students,
            freshers, and professionals by providing verified job listings,
            easy applications, and a secure platform to grow careers.
          </p>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">What We Offer</h3>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold">Verified Jobs</h5>
              <p className="text-muted small">
                Carefully curated listings from trusted companies.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold">Easy Apply</h5>
              <p className="text-muted small">
                Apply quickly with resume upload and profile details.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold">Secure Platform</h5>
              <p className="text-muted small">
                Your personal data and applications are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">Ready to Start Your Career Journey?</h4>
          <button
            className="btn btn-dark px-4 py-2"
            onClick={() => navigate("/jobs")}
          >
            Explore Jobs
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default About;