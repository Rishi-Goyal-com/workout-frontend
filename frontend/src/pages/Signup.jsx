// import { useState } from "react";
// import { signup } from "../services/authService";

// function Signup() {
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await signup(formData);
//       alert("Signup successful! Please sign in.");
//     } catch (err) {
//       console.error(err);
//       console.log(formData);

//       alert("Signup failed!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Signup;
// export default Signup;
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { signup } from "../services/authService";

function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful! Please sign in.");
      navigate("/signin"); // Redirect to signin page after successful signup
    } catch (err) {
      console.error(err);
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
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
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account? <Link to="/signin" className="text-primary">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
