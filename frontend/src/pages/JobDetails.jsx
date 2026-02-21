import React from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import jobsData from "../data/jobs.json";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <h4>Job Not Found</h4>
          <Link to="/jobs" className="btn btn-dark mt-3">
            Back to Jobs
          </Link>
        </div>
      </Layout>
    );
  }

return (
    <Layout>
        <section className="py-5">
            <div className=" container">
                <div className=" card shadow-lg border-0 p-4">
                    <h2 className="fw-bold mb-2">{job.job_title}</h2>
                    <p className="text-muted mb-3"><i className="fas fa-city"></i> {job.company_name} - <i className="fas fa-location-dot"></i>{job.location}</p>

                    <div className="mb-3 d-flex gap-2 flex-wrap">
                        <span className="badge bg-light text-dark border">{job.job_type}</span>
                      <span className="badge bg-light text-dark border">{job.experience_level}</span>
                    </div>
                    <h5 className="text-success mb-3">{job.salary_lpa}</h5>

                    <hr />

                    <h6 className="fw-bold">Required Skills</h6>
                    <div className="mb-4 d-flex flex-wrap gap-2">
                        {job.required_skills.map((skill, index) => (
                            <span key={index} className="badge bg-secondary">{skill}</span>
                        ))}
                    </div>
                    <h6 className="fw-bold">Job Description</h6>
                    <p>{job.job_description}</p>

                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </section>
    </Layout>
)};

export default JobDetails;
