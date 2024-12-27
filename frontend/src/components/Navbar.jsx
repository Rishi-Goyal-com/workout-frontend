// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear user token
//     navigate("/signin"); // Redirect to signin page
//   };

//   return (
//     <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
//       <div className="flex items-center">
//         <button className="text-xl font-bold">☰</button>
//         <h1 className="ml-4 text-2xl">Workout App</h1>
//       </div>
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
//       >
//         Logout
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
// import React from "react";
// import { useNavigate, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear user token
//     navigate("/signin"); // Redirect to signin page
//   };

//   return (
//     <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
//       {/* Left Section */}
//       <div className="flex items-center">
//         <button className="text-xl font-bold">☰</button>
//         <h1 className="ml-4 text-2xl">Workout App</h1>
//       </div>

//       {/* Center Links */}
//       <div className="flex space-x-4">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/build-schedule"
//           className={({ isActive }) =>
//             isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
//           }
//         >
//           Build Schedule
//         </NavLink>
//         <NavLink
//           to="/today-workout"
//           className={({ isActive }) =>
//             isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
//           }
//         >
//           Today Workout
//         </NavLink>
//         <NavLink
//           to="/performance"
//           className={({ isActive }) =>
//             isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
//           }
//         >
//           Performance
//         </NavLink>
//       </div>

//       {/* Logout Button */}
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
//       >
//         Logout
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear user token
    navigate("/signin"); // Redirect to signin page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink to="/" className="navbar-brand">
          Workout App
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/build-schedule"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Build Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/today-workout"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Today Workout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/performance"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Performance
              </NavLink>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="btn btn-danger ms-lg-3 btn-3d"
            style={{ borderRadius: '20px' }}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
