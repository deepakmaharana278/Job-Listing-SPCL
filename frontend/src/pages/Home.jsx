import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="py-3 bg-light">
        <div className="container py-5 text-center">
          <h1 className="display-5 fw-bold mb-3">Find Your Dream Job Today</h1>
          <p className="lead text-muted mb-4">
            Explore thousands of verified job listing from top companies, Your next career move starts here.
          </p>

          <form className="bg-white p-3 rounded shadow-sm d-flex flex-column flex-md-row gap-2 mx-auto" style={{maxWidth:"750px"}}>
            <input
              type="text"
              placeholder="Job title or keyword"
              className="form-control"
            />
            <input
              type="text"
              placeholder="Location"
              className="form-control"
            />
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
    </Layout>
  );
};

export default Home;
