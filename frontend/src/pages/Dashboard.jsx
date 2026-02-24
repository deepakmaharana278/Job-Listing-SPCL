import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import jobsData from "../data/jobs.json";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/my-applications/`, {
          params: { user_id: user.id },
        });

        setApplications(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchApplications();
    }
  }, []);

  return (
    <Layout>
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Welcome, {user?.name}</h2>

        <h5 className="mb-3">My Applications</h5>

        {applications.length === 0 ? (
          <p className="text-muted">No applications yet.</p>
        ) : (
          <div className="card shadow-sm border-0">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Applied On</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => {
                    const job = jobsData.find((j) => j.id === app.job_id);

                    return (
                      <tr key={index}>
                        <td className="fw-semibold">{job?.job_title || "Job Not Found"}</td>

                        <td>{job?.company_name || "-"}</td>

                        <td>{job?.location || "-"}</td>

                        <td>
                          <span
                            className={`badge ${
                              app.status === "accepted" ? "bg-success" : app.status === "rejected" ? "bg-danger" : app.status === "reviewed" ? "bg-warning text-dark" : "bg-secondary"
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>

                        <td>{new Date(app.applied_at).toLocaleDateString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
