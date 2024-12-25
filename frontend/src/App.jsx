import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import BuildSchedule from "./pages/BuildSchedule";
import TodayWorkout from "./pages/TodayWorkout";
import Performance from "./pages/Performance";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/build-schedule"
          element={
            <ProtectedRoute>
              <Navbar />
              <BuildSchedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/today-workout"
          element={
            <ProtectedRoute>
              <Navbar />
              <TodayWorkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/performance"
          element={
            <ProtectedRoute>
              <Navbar />
              <Performance />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
