// // export default Signin;
// import { useState } from "react";
// import { signin } from "../services/authService";
// import { Link, useNavigate } from "react-router-dom";

// function Signin() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await signin(formData);
//       localStorage.setItem("token", data.token);
//       alert("Signin successful!");
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       alert("Signin failed!");
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
//         <h2 className="text-center mb-4">Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="form-control"
//               placeholder="Enter your username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">Sign In</button>
//           </div>
//         </form>
//         <div className="text-center mt-3">
//           <p className="mb-0">
//             Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../services/authService";

function Signin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signin(formData);
      localStorage.setItem("token", data.token);
      alert("Signin successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Signin failed!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light position-relative">
      {/* Animation Section */}
      <div className="welcome-banner">
        <h1>Welcome to the Workout Scheduler!</h1>
      </div>
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
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
            Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
