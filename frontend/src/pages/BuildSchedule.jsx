// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// function BuildSchedule() {
//   const [day, setDay] = useState("Monday");
//   const [exercises, setExercises] = useState([]);
//   const [newExercise, setNewExercise] = useState(""); // keep as a string for user input

//   // Assuming each exercise has a name, you can extend this object as needed
//   const handleAddExercise = async () => {
//     if (!newExercise) return;

//     // Create an exercise object with a name field (you can extend this if needed)
//     const exerciseObj = { name: newExercise };

//     const updatedExercises = [...exercises, exerciseObj];
//     setExercises(updatedExercises);

//     try {
//         await axios.post(
//           `http://localhost:5000/api/schedule`,
//           { day, exercises: updatedExercises },
//           { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//         );
//         alert("Schedule updated!");
//         setNewExercise(""); // Clear input after adding
//       } catch (err) {
//         console.error(err);
//         alert("Failed to update schedule!");

//         // Debugging information
//         console.log(localStorage.getItem("token"));
//         console.log("Error response:", err.response?.data || "No response data");
//         console.log("Error status:", err.response?.status || "No status code");
//         console.log("Error headers:", err.response?.headers || "No headers");
//         console.log("Request config:", err.config || "No request config");
//       }
//   };

//   // Fetching existing schedule
//   const fetchSchedule = async () => {
//     try {
//       const { data } = await axios.get(`${API_URL}/schedule`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       const schedule = data.find((s) => s.day === day);
//       setExercises(schedule ? schedule.exercises : []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchSchedule();
//   }, [day]);

//   return (
//     <div>
//       <h2>Build Schedule for {day}</h2>
//       <select onChange={(e) => setDay(e.target.value)} value={day}>
//         {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
//           <option key={d} value={d}>{d}</option>
//         ))}
//       </select>

//       <div>
//         <h3>Exercises:</h3>
//         <ul>
//           {exercises.map((exercise, idx) => (
//             <li key={idx}>{exercise.name}</li>  
//             /* Render the name of each exercise */
//           ))}
//         </ul>
//       </div>

//       <input
//         type="text"
//         placeholder="Add an exercise"
//         value={newExercise}
//         onChange={(e) => setNewExercise(e.target.value)}
//       />
//       <button onClick={handleAddExercise}>Add Exercise</button>
//     </div>
//   );
// }

// export default BuildSchedule;
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

const API_URL = import.meta.env.VITE_API_URL;

function BuildSchedule() {
  const [day, setDay] = useState("Monday");
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState("");

  // Handle adding a new exercise
  const handleAddExercise = async () => {
    if (!newExercise) return;

    const exerciseObj = { name: newExercise };
    const updatedExercises = [...exercises, exerciseObj];
    setExercises(updatedExercises);

    try {
      await axios.post(
        `${API_URL}/schedule`,
        { day, exercises: updatedExercises },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Exercise added!");
      setNewExercise(""); // Clear input
    } catch (err) {
      console.error(err);
      alert("Failed to update schedule!");
    }
  };

  // Handle deleting an exercise
  const handleDeleteExercise = async (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);

    try {
      await axios.post(
        `${API_URL}/schedule`,
        { day, exercises: updatedExercises },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Exercise deleted!");
    } catch (err) {
      console.error(err);
      alert("Failed to update schedule!");
    }
  };

  // Fetch existing schedule
  const fetchSchedule = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/schedule`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const schedule = data.find((s) => s.day === day);
      setExercises(schedule ? schedule.exercises : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, [day]);

  return (
    <div className="container mt-4">
      <h2 className="display-4 text-center" style={{color:"white",textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgb(255, 255, 255)"
}}>Build Schedule for {day}</h2>

      {/* Dropdown for selecting the day */}
      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select w-50"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        >
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Display existing exercises */}
      <div className="mb-4">
        <h3 style={{color:"white",opacity:"0.8"}}>Exercises:</h3>
        {exercises.length > 0 ? (
          <ul className="list-group">
            {exercises.map((exercise, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {exercise.name}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteExercise(idx)}
                  title="Delete Exercise"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{color:"white",opacity:"0.8"}}>No exercises added for {day} yet.</p>
        )}
      </div>

      {/* Add new exercise */}
      <div className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control me-2 w-50"
          placeholder="Add an exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddExercise}>
          Add Exercise
        </button>
      </div>
    </div>
  );
}

export default BuildSchedule;
