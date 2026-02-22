import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, Link } from "react-router-dom";
import jobsData from "../data/jobs.json";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [randomJobs, setRandomJobs] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?keyword=${keyword}&location=${location}`);
  };

  useEffect(() => {
    const random = [...jobsData].sort(() => Math.random() - 0.5);
    setRandomJobs(random.slice(0, 8));
  }, []);

  return (
    <Layout>
      <section className="py-3 bg-light">
        <div className="container py-5 text-center">
          <h1 className="display-5 fw-bold mb-3">Find Your Dream Job Today</h1>
          <p className="lead text-muted mb-4">Explore thousands of verified job listing from top companies, Your next career move starts here.</p>

          <form onSubmit={handleSearch} className="bg-white p-3 rounded shadow-sm d-flex flex-column flex-md-row gap-2 mx-auto" style={{ maxWidth: "750px" }}>
            <input type="text" placeholder="Job title" className="form-control" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <input type="text" placeholder="Location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button className="btn btn-dark px-4">Search</button>
          </form>

          <div className="mt-5 gap-4 d-flex justify-content-center flex-wrap">
            <div>
              <h5 className="fw-bold mb-0">10K+</h5>
              <p className="text-muted">Active Jobs</p>
            </div>
            <div>
              <h5 className="fw-bold mb-0">5K+</h5>
              <p className="text-muted">Companies</p>
            </div>
            <div>
              <h5 className="fw-bold mb-0">15K+</h5>
              <p className="text-muted">Job Seekers</p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Featured Jobs</h3>
            <Link to="/jobs" className="btn btn-outline-dark btn-sm">
              View All
            </Link>
          </div>

          <div className="row g-4">
            {randomJobs.map((job) => (
              <div className="col-md-6 col-lg-3" key={job.id}>
                <div className="card h-100 shadow-sm border-0 p-3">
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-1">{job.job_title}</h5>
                    <p className="text-muted mb-1">
                      <i className="fas fa-city"></i> {job.company_name}
                    </p>
                    <p className="small text-muted mb-2">
                      <i className="fas fa-location-dot"></i> {job.location}
                    </p>
                    <div className="mb-2 d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark border">{job.job_type}</span>
                      <span className="badge bg-light text-dark border">{job.experience_level}</span>
                    </div>
                    <p className="fw-semibold text-success mb-2">₹ {job.salary_lpa}</p>
                    <div className="mt-auto">
                      <Link to={`/jobs/${job.id}`} className="btn btn-primary btn-sm w-100">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
