import React, { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    career_level: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/register/`, formData);
      toast.success(res.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        career_level: "",
        confirm_password: "",
      });
      setTimeout(() => {
        navigate('/login')
      }, 3000);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="mt-3 min-vh-100 d-flex align-items-center bg-light">
        <div className="container d-flex justify-content-center">
          <div className="card border-0 shadow-lg p-5" style={{ width: "100%", maxWidth: "480px", borderRadius: "16px" }}>
            <h2 className="text-center fw-bold mb-4">Create an Account</h2>

            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control py-2" placeholder="Enter your full name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Career Level</label>
              <select name="career_level" value={formData.career_level} onChange={handleChange} className="form-select py-2" required>
                <option value="">Select your level</option>
                <option value="student">Student</option>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
                <option value="intern">Internship Seeker</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control py-2" placeholder="name@example.com" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control py-2" placeholder="Create a password" required />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input onChange={handleChange} value={formData.confirm_password} name="confirm_password" type="password" className="form-control py-2" placeholder="Re-enter your password" required />
            </div>

            <button className="btn btn-dark w-100 py-2 fw-semibold" type="submit" style={{ borderRadius: "8px" }}>
              Create Account
            </button>

            <div className="text-center mt-3">
              <small className="text-muted">
                Already have an account?{" "}
                <span onClick={()=>navigate('/login')} className="fw-semibold text-dark" style={{ cursor: "pointer" }}>
                  Login
                </span>
              </small>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
