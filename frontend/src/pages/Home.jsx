// function Home() {
//     return (
//       <div>
//         <h1>Welcome to the Workout App!</h1>
//         <p>Track your workouts, build schedules, and monitor your performance easily.</p>
//         <p>Sign up or sign in to get started.</p>
//       </div>
//     );
//   }
  
//   export default Home;
  // export default Home;
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="text-center">
//         <h1 className="display-4 fw-bold mb-3">Welcome to the Workout App!</h1>
//         <p className="lead mb-4">
//           Track your workouts, build schedules, and monitor your performance effortlessly.
//         </p>
//         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//           <Link to="/signup" className="btn btn-primary btn-lg px-4">
//             Sign Up
//           </Link>
//           <Link to="/signin" className="btn btn-outline-primary btn-lg px-4">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { NavLink } from "react-router-dom";

// function Home() {
//     return (
//       <div className="container mt-5">
//         <h1 className="display-4 text-center">Welcome to the Workout App!</h1>
//         <p className="lead text-center">
//           Track your workouts, build schedules, and monitor your performance easily.
//         </p>
//         <p className="text-center">
//           <a href="/build-schedule" className="btn btn-primary btn-lg mx-2">
//             Build Schedule
//           </a>
//           <a href="/today-workout" className="btn btn-secondary btn-lg mx-2">
//             Today's Workout Schedule
//           </a>
//         </p>
//       </div>
//     );
//   }
  
//   export default Home;
  

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center" style={{color:"white",textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgb(255, 255, 255)"
}}>Welcome to the Workout Scheduler!</h1>
      <p className="lead text-center" style={{color:"white", textShadow: "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 1)"

// White glow effect
}}>
        Track your workouts, build schedules, and monitor your performance easily.
      </p>
      <p className="text-center">
        <Link to="/build-schedule" className="btn btn-primary btn-lg mx-2">
          Build Schedule
        </Link>
        <Link to="/today-workout" className="btn btn-secondary btn-lg mx-2">
          Today's Workout Schedule
        </Link>
      </p>
    </div>
  );
}

export default Home;
