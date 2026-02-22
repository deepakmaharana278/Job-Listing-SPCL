import React, { useState } from "react";
import jobsData from "../data/jobs.json";
import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

const Jobs = () => {
  const jobsPerpage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword")?.toLowerCase() || "";
  const locationParam = queryParams.get("location")?.toLowerCase() || "";

  const filteredJobs = jobsData.filter((job) => job.job_title.toLowerCase().includes(keyword) && job.location.toLowerCase().includes(locationParam));

  // pagination
  const lastJobPage = currentPage * jobsPerpage;
  const firstJobPage = lastJobPage - jobsPerpage;
  const currentJobs = filteredJobs.slice(firstJobPage, lastJobPage);

  //   console.log(currentJobs);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerpage);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-2 text-center">{keyword || locationParam ? "Search Results" : "All Jobs"}</h2>

          {(keyword || locationParam) && (
            <p className="text-center text-muted mb-4">
              Showing results for
              {keyword && <strong> "{keyword}" </strong>}
              {keyword && locationParam && " in "}
              {locationParam && <strong> "{locationParam}" </strong>}
            </p>
          )}
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-5">
              <h4 className="fw-bold">No Jobs Found</h4>
              <p className="text-muted">Try searching with different keywords or location.</p>
            </div>
          )}
          <div className="row g-4">
            {currentJobs?.map((job) => (
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

            <div className="mt-5">
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <button onClick={() => pagination(index + 1)} className="page-link">
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
