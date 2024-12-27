import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Do not change
import { signin } from "../services/authService";

function Signin() {
  const [step, setStep] = useState(1); // Track the animation step
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Do not change

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 3000); // After 3s, move to step 2
    const timer2 = setTimeout(() => setStep(3), 6000); // After 6s, move to step 3

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signin(formData);
      localStorage.setItem("token", data.token);
      alert("Signin successful!");
      navigate("/"); // Do not change
    } catch (err) {
      console.error(err);
      alert("Signin failed!");
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
      {/* Step 1: Welcome Animation */}
      {step === 1 && (
        <h1
          className="welcome-banner text-center"
          style={{
            animation: "fadeInOut 3s ease-in-out",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff", // White glow effect

          }}
        >
          Welcome to the Workout Scheduler
        </h1>
      )}

      {/* Step 2: Sign in to Get Started */}
      {step === 2 && (
        <h2
          className="welcome-banner text-center"
          style={{
            animation: "fadeInOut 3s ease-in-out",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff", // White glow effect

          }}
        >
          Sign in to get started
        </h2>
      )}

      {/* Step 3: Show Sign-in Form */}
      {step === 3 && (
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
          <h2 className="text-center mb-4">Sign In</h2>
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
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <p className="mb-0">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;
