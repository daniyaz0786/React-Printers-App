import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 to check where user came from

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    // ✅ Only show "already logged in" if user manually visits /login
    if (isLoggedIn === "true" && !location.state?.fromCart) {
      toast.success("You're already logged in!");
      navigate("/");
    }
  }, [navigate, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // ✅ Store login session
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userEmail", email);

    toast.success("Login successful!");

    // Redirect to home (or previous page)
    setTimeout(() => {
      navigate(location.state?.fromCart ? "/" : "/");
    }, 1200);
  };

  return (
    <section className="account py-80 d-flex justify-content-center align-items-center">
      <div className="container container-lg d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="col-xl-4 col-lg-5 col-md-6 col-sm-8"
        >
          <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 shadow-sm bg-white">
            <h6 className="text-xl mb-32 text-center">
              Sign In to Your Account
            </h6>

            <div className="mb-24">
              <label
                htmlFor="email"
                className="text-neutral-900 text-lg mb-8 fw-medium"
              >
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="common-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-24">
              <label
                htmlFor="password"
                className="text-neutral-900 text-lg mb-8 fw-medium"
              >
                Password <span className="text-danger">*</span>
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="common-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className={`toggle-password position-absolute top-50 translate-middle-y inset-inline-end-0 me-16 cursor-pointer ph ${
                    showPassword ? "ph-eye" : "ph-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ fontSize: "20px", color: "#555" }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-main py-18 fw-medium w-100 mt-32"
            >
              Log In
            </button>

            <div className="mt-20 text-center">
              <p>
                Don't have an account?
                <Link to="/register" className="text-main-600 ms-1">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Account;
