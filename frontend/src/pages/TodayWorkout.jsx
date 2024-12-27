// // export default TodayWorkout;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// function TodayWorkout() {
//   const [exercises, setExercises] = useState([]);
//   const [selectedExercise, setSelectedExercise] = useState(null); // Track the selected exercise
//   const [newSets, setNewSets] = useState([]); // Store the new sets input by the user
//   const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

//   useEffect(() => {
//     const fetchTodaySchedule = async () => {
//       try {
//         const { data } = await axios.get(`${API_URL}/schedule`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const todaySchedule = data.find((s) => s.day === currentDay);
//         setExercises(todaySchedule ? todaySchedule.exercises : []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchTodaySchedule();
//   }, [currentDay]);

//   const handleExerciseClick = (exercise) => {
//     setSelectedExercise(exercise);
//     setNewSets([]); // Reset new sets when an exercise is selected
//   };

//   const handleAddSet = () => {
//     setNewSets([...newSets, { weight: "", reps: "" }]); // Add a new set with empty weight and reps
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedSets = [...newSets];
//     updatedSets[index][field] = value; // Update the weight or reps for the specific set
//     setNewSets(updatedSets);
//   };

// const handleSubmitSets = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
  
//     try {
//       console.log("Submitting to:", `${API_URL}/performance/add`);
//       console.log("Payload:", {
//         exerciseName: selectedExercise.name,
//         newSets,
//       });
  
//       // Send the data to the backend
//       const response = await axios.post(
//         `${API_URL}/performance/add`,
//         {
//           exerciseName: selectedExercise.name,
//           newSets,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
  
//       // Store response data in state if needed
//       console.log("New sets submitted successfully:", response.data);
//       setSelectedExercise(response.data.exercise); // Update the selected exercise with new data
//       setNewSets([]); // Reset new sets input
//       alert("New sets submitted successfully!");
//     } catch (err) {
//       console.error("Error submitting new sets:", err);
//       alert("Failed to submit new sets.");
  
//       // Debugging information
//       console.log("Payload sent:", {
//         exerciseName: selectedExercise.name,
//         newSets,
//       });
//       console.log("Error response:", err.response?.data || "No response data");
//     }
//   };
  
//   return (
//     <div>
//       <h2>Today's Workout - {currentDay}</h2>
//       {exercises.length > 0 ? (
//         <ul>
//           {exercises.map((exercise, idx) => (
//             <li key={idx} onClick={() => handleExerciseClick(exercise)}>
//               {exercise.name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No exercises scheduled for today.</p>
//       )}

//       {selectedExercise && (
//         <div>
//           <h3>{selectedExercise.name}</h3>

//           <div>
//             {newSets.map((set, index) => (
//               <div key={index}>
//                 <input
//                   type="number"
//                   placeholder="Weight"
//                   value={set.weight}
//                   onChange={(e) => handleInputChange(index, "weight", e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Reps"
//                   value={set.reps}
//                   onChange={(e) => handleInputChange(index, "reps", e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>

//           <button onClick={handleAddSet}>Add New Set</button>

//           {newSets.length > 0 && (
//             <button onClick={handleSubmitSets}>Submit New Sets</button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default TodayWorkout;
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaCheckCircle } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function TodayWorkout() {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [newSets, setNewSets] = useState([]);
  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    const fetchTodaySchedule = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/schedule`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const todaySchedule = data.find((s) => s.day === currentDay);
        setExercises(todaySchedule ? todaySchedule.exercises : []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodaySchedule();
  }, [currentDay]);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setNewSets([]);
  };

  const handleAddSet = () => {
    setNewSets([...newSets, { weight: "", reps: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSets = [...newSets];
    updatedSets[index][field] = value;
    setNewSets(updatedSets);
  };

  const handleSubmitSets = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/performance/add`,
        {
          exerciseName: selectedExercise.name,
          newSets,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setSelectedExercise(response.data.exercise);
      setNewSets([]);
      alert("New sets submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit new sets.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="display-4 text-center" style={{color:"white",textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgb(255, 255, 255)"
}}>Today's Workout - {currentDay}</h2>

      {exercises.length > 0 ? (
        <ul className="list-group mb-4">
          {exercises.map((exercise, idx) => (
            <li
              key={idx}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={() => handleExerciseClick(exercise)}
            >
              {exercise.name}
              {selectedExercise?.name === exercise.name && (
                <FaCheckCircle className="text-success" />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{color:"white",opacity:"0.8"}}>No exercises scheduled for today.</p>
      )}

      {selectedExercise && (
        <div>
          <h3 className="mb-4">{selectedExercise.name}</h3>

          <div className="mb-3">
            {newSets.map((set, index) => (
              <div key={index} className="d-flex gap-2 mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Weight (kg)"
                  value={set.weight}
                  onChange={(e) => handleInputChange(index, "weight", e.target.value)}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Reps"
                  value={set.reps}
                  onChange={(e) => handleInputChange(index, "reps", e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleAddSet}>
              <FaPlus className="me-1" /> Add New Set
            </button>

            {newSets.length > 0 && (
              <button className="btn btn-success" onClick={handleSubmitSets}>
                Submit New Sets
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodayWorkout;
