import React, { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Layout>
      <section className="bg-light py-5 text-center border-bottom">
        <div className="container">
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="text-muted lead">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4">

                <h4 className="fw-bold mb-4 text-center">Send us a message</h4>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h5 className="fw-bold mb-3">Other Ways to Reach Us</h5>
          <p className="text-muted mb-1"><i className="fas fa-envelope"></i> support@jobportal.com</p>
          <p className="text-muted mb-1"><i className="fas fa-phone"></i> +91 8984056080</p>
          <p className="text-muted"><i className="fas fa-location-dot"></i> Bhubaneswar, India</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;