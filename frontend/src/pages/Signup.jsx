import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { signup } from "../services/authService";

function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation
    try {
      await signup(formData);
      alert("Signup successful! Please sign in.");
      navigate("/signin"); // Redirect to signin page after successful signup
    } catch (err) {
      console.error(err);
      alert("Signup failed! Please try again.");
    } finally {
      setLoading(false); // Hide loading animation
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('./workoutap.jpg')", // Set the background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire page
      }}
    >
      {loading && (
        <div className="loading-animation">
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h3 className="text-light mt-3">Creating your account...</h3>
        </div>
      )}

      {!loading && (
        <div
          className="card shadow-lg p-4"
          style={{
            maxWidth: "400px",
            width: "100%",
            animation: "fadeIn 1s ease-in-out",
            background: "rgba(255, 255, 255, 0.8)", // Slight transparency for better readability
            borderRadius: "10px",
          }}
        >
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <p className="mb-0">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
