import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import jobsData from "../data/jobs.json";
import { toast } from "react-toastify";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === Number(id));
  const [showForm, setShowForm] = useState(false);
  const [resume, setResume] = useState(null);
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"));

  const handleApply = async (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload resume");
      return;
    }

    const formData = new FormData();
    formData.append("job_id", job.id);
    formData.append("user_id", user.id);
    formData.append("phone", phone);
    formData.append("cover_letter", coverLetter);
    formData.append("resume", resume);
  };

  const handleApplyNow = () => {
    if (!user) {
      toast.error("Please login first");
      setTimeout(() => {
        navigate('/login')
      }, 3000);
      return;
    } else {
      setShowForm(true)
    }
  }

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
            <p className="text-muted mb-3">
              <i className="fas fa-city"></i> {job.company_name} - <i className="fas fa-location-dot"></i>
              {job.location}
            </p>

            <div className="mb-3 d-flex gap-2 flex-wrap">
              <span className="badge bg-light text-dark border">{job.job_type}</span>
              <span className="badge bg-light text-dark border">{job.experience_level}</span>
            </div>
            <h5 className="text-success mb-3">{job.salary_lpa}</h5>

            <hr />

            <h6 className="fw-bold">Required Skills</h6>
            <div className="mb-4 d-flex flex-wrap gap-2">
              {job.required_skills.map((skill, index) => (
                <span key={index} className="badge bg-secondary">
                  {skill}
                </span>
              ))}
            </div>
            <h6 className="fw-bold">Job Description</h6>
            <p>{job.job_description}</p>

            <button onClick={handleApplyNow} className="btn btn-primary">Apply Now</button>
          </div>

          {showForm && (
            <div className="card mt-4 p-4 shadow-sm border-0">
              <h5 className="fw-bold mb-3">Apply for this Job</h5>

              <form onSubmit={handleApply}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input type="text" className="form-control" value={user?.name} disabled />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" value={user?.email} disabled />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone</label>
                  <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Upload Resume (PDF)</label>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Cover Letter</label>
                  <textarea className="form-control" rows="4" placeholder="Write a short cover letter..." value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-dark">
                    Submit Application
                  </button>

                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default JobDetails;
