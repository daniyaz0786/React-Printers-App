import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Store temporary session
    sessionStorage.setItem("user", JSON.stringify({ name, email, password }));

    toast.success("Registration successful!");
    setTimeout(() => navigate("/"), 1500); // Redirect to home after 1.5s
  };

  return (
    <section className="account py-80 d-flex align-items-center justify-content-center min-vh-100">
      <div className="container container-lg" style={{ maxWidth: "600px" }}>
        <form onSubmit={handleRegister}>
          <div className="border border-gray-100 rounded-16 px-24 py-40 shadow-sm">
            <h6 className="text-xl mb-32 text-center">Create Your Account</h6>

            <div className="mb-24">
              <label
                htmlFor="usernameTwo"
                className="text-lg fw-medium mb-8 d-block"
              >
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="usernameTwo"
                className="common-input w-100"
                placeholder="Write your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-24">
              <label
                htmlFor="emailTwo"
                className="text-lg fw-medium mb-8 d-block"
              >
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="emailTwo"
                className="common-input w-100"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-24 position-relative">
              <label
                htmlFor="enter-password"
                className="text-lg fw-medium mb-8 d-block"
              >
                Password <span className="text-danger">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="enter-password"
                className="common-input w-100"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={`position-absolute cursor-pointer ${
                  showPassword ? "ph ph-eye" : "ph ph-eye-slash"
                }`}
                style={{
                  top: "50%",
                  right: "12px",
                  transform: "translateY(-50%)",
                  fontSize: "20px",
                  color: "#555",
                }}
              />
            </div>

            <div className="mt-48">
              <button type="submit" className="btn btn-main py-18 w-100">
                Register
              </button>
            </div>

            <div className="mt-20 text-center">
              <p>
                Already have an account?
                <Link to="/login">&nbsp;Sign In</Link>
              </p>
            </div>

            <div className="mt-20 text-gray-500 text-center">
              <p>
                By creating an account, you agree to our{" "}
                <Link to="/terms-and-conditions">Terms of Service</Link>{" "}
                &nbsp;and <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Account;
