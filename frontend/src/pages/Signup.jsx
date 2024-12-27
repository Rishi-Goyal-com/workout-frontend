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
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
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
    </div>
  );
}

export default Signup;



// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import { signup } from "../services/authService";

// function Signup() {
//   const [step, setStep] = useState(1); // Track the animation step
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     const timer1 = setTimeout(() => setStep(2), 3000); // After 3s, move to step 2
//     const timer2 = setTimeout(() => setStep(3), 6000); // After 6s, move to step 3

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(formData);
//       alert("Signup successful! Please sign in.");
//       navigate("/signin"); // Redirect to signin page after successful signup
//     } catch (err) {
//       console.error(err);
//       alert("Signup failed! Please try again.");
//     }
//   };

//   return (
//     <div
//       className="d-flex align-items-center justify-content-center vh-100"
//       style={{
//         backgroundImage: "url('./workoutap.jpg')", // Set the background image
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         minHeight: "100vh", // Ensure the background covers the entire page
//       }}
//     >
//       {step === 1 && (
//         <h1
//           className="welcome-banner text-center"
//           style={{
//             animation: "fadeInOut 3s ease-in-out",
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//           }}
//         >
//           Welcome to the Workout Scheduler
//         </h1>
//       )}
//       {step === 2 && (
//         <h2
//           className="welcome-banner text-center"
//           style={{
//             animation: "fadeInOut 3s ease-in-out",
//             fontSize: "2rem",
//             fontWeight: "bold",
//           }}
//         >
//           Create an account to get started
//         </h2>
//       )}
//       {step === 3 && (
//         <div
//           className="card shadow-lg p-4"
//           style={{
//             maxWidth: "400px",
//             width: "100%",
//             animation: "fadeIn 1s ease-in-out",
//             background: "rgba(255, 255, 255, 0.8)", // Slight transparency for better readability
//             borderRadius: "10px",
//           }}
//         >
//           <h2 className="text-center mb-4">Sign Up</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 className="form-control"
//                 placeholder="Enter your username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary">
//                 Sign Up
//               </button>
//             </div>
//           </form>
//           <div className="text-center mt-3">
//             <p className="mb-0">
//               Already have an account?{" "}
//               <Link to="/signin" className="text-primary">
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;
