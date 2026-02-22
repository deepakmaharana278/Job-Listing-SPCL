import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login/`, formData);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // console.log("user", JSON.stringify(res.data.user))
      toast.success(res.data.message);

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="min-vh-100 d-flex align-items-center bg-light">
        <div className="container d-flex justify-content-center">
          <div className="card border-0 shadow-lg p-5" style={{ width: "100%", maxWidth: "420px", borderRadius: "16px" }}>
            <h2 className="text-center fw-bold mb-4">Welcome Back</h2>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control py-2" placeholder="name@example.com" required />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control py-2" placeholder="Enter your password" required />
            </div>

            <button className="btn btn-dark w-100 py-2 fw-semibold" type="submit" style={{ borderRadius: "8px" }}>
              Login
            </button>

            <div className="text-center mt-3">
              <small className="text-muted">
                Don't have an account?{" "}
                <span onClick={()=>navigate('/register')} className="fw-semibold text-dark" style={{ cursor: "pointer" }}>
                  Register
                </span>
              </small>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
