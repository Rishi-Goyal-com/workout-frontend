// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";
// import {
//       Chart as ChartJS,
//       CategoryScale,
//       LinearScale,
//       LineElement,
//       PointElement,
//       Title,
//       Tooltip,
//       Legend,
//     } from "chart.js"; 
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );
// const API_URL = import.meta.env.VITE_API_URL;

// const Performance = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     const fetchPerformance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${API_URL}/performance`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPerformanceData(res.data);
//       } catch (err) {
//         console.error("Error fetching performance data", err);
//       }
//     };

//     fetchPerformance();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Performance</h1>
//       {performanceData.length > 0 ? (
//         performanceData.map((exercise) => (
//           <div key={exercise.name} className="my-8">
//             <h2 className="text-xl mb-2">{exercise.name}</h2>
  
//             {exercise.data && exercise.data.length > 0 ? (
//               <>
//                 <h4>
//                   Highest Weight:{" "}
//                   {Math.max(...exercise.data.map((d) => d.weight || 0))} kg
//                 </h4>
//                 <h4>
//                   Reps for Highest Weight:{" "}
//                   {
//                     exercise.data.find(
//                       (d) =>
//                         d.weight === Math.max(...exercise.data.map((d) => d.weight || 0))
//                     )?.reps || 0
//                   }
//                 </h4>
//                 <Line
//                   data={{
//                     labels: exercise.data.map((d) => d.date || "N/A"),
//                     datasets: [
//                       {
//                         label: "Weight",
//                         data: exercise.data.map((d) => d.weight || 0),
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         backgroundColor: "rgba(75, 192, 192, 0.2)",
//                         tension: 0.3,
//                       },
//                       {
//                         label: "Reps",
//                         data: exercise.data.map((d) => d.reps || 0),
//                         borderColor: "rgba(153, 102, 255, 1)",
//                         backgroundColor: "rgba(153, 102, 255, 0.2)",
//                         tension: 0.3,
//                       },
//                     ],
//                   }}
//                 />
//               </>
//             ) : (
//               <p>No valid data available for {exercise.name}.</p>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No performance data available.</p>
//       )}
//     </div>
//   );
// }
//   export default Performance;
// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const API_URL = import.meta.env.VITE_API_URL;

// const Performance = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     const fetchPerformance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${API_URL}/performance`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPerformanceData(res.data);
//       } catch (err) {
//         console.error("Error fetching performance data", err);
//       }
//     };

//     fetchPerformance();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Performance Overview</h1>
//       {performanceData.length > 0 ? (
//         performanceData.map((exercise) => (
//           <div key={exercise.name} className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h2 className="card-title text-primary">{exercise.name}</h2>

//               {exercise.data && exercise.data.length > 0 ? (
//                 <>
//                   <div className="mb-3">
//                     <p>
//                       <strong>Highest Weight:</strong>{" "}
//                       {Math.max(...exercise.data.map((d) => d.weight || 0))} kg
//                     </p>
//                     <p>
//                       <strong>Reps for Highest Weight:</strong>{" "}
//                       {
//                         exercise.data.find(
//                           (d) =>
//                             d.weight ===
//                             Math.max(...exercise.data.map((d) => d.weight || 0))
//                         )?.reps || 0
//                       }
//                     </p>
//                   </div>

//                   <div>
//                     <Line
//                       data={{
//                         labels: exercise.data.map((d) => d.date || "N/A"),
//                         datasets: [
//                           {
//                             label: "Weight (kg)",
//                             data: exercise.data.map((d) => d.weight || 0),
//                             borderColor: "rgba(75, 192, 192, 1)",
//                             backgroundColor: "rgba(75, 192, 192, 0.2)",
//                             tension: 0.4,
//                           },
//                           {
//                             label: "Reps",
//                             data: exercise.data.map((d) => d.reps || 0),
//                             borderColor: "rgba(153, 102, 255, 1)",
//                             backgroundColor: "rgba(153, 102, 255, 0.2)",
//                             tension: 0.4,
//                           },
//                         ],
//                       }}
//                       options={{
//                         responsive: true,
//                         plugins: {
//                           legend: {
//                             position: "top",
//                           },
//                           title: {
//                             display: true,
//                             text: `Performance for ${exercise.name}`,
//                           },
//                         },
//                       }}
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <p className="text-muted">No valid data available for {exercise.name}.</p>
//               )}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-muted text-center">No performance data available.</p>
//       )}
//     </div>
//   );
// };

// export default Performance;
// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const API_URL = import.meta.env.VITE_API_URL;

// const Performance = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     const fetchPerformance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${API_URL}/performance`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPerformanceData(res.data);
//       } catch (err) {
//         console.error("Error fetching performance data", err);
//       }
//     };

//     fetchPerformance();
//   }, []);

//   return (
//     <div className="bg-gray-100 p-8 min-h-screen">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Your Workout Performance
//         </h1>
//         {performanceData.length > 0 ? (
//           performanceData.map((exercise) => (
//             <div key={exercise.name} className="mb-10">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">{exercise.name}</h2>
//                 <div className="text-lg text-gray-600">
//                   Highest Weight:{" "}
//                   {Math.max(...exercise.data.map((d) => d.weight || 0))} kg
//                 </div>
//               </div>
//               {exercise.data && exercise.data.length > 0 ? (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//                   <h4 className="text-lg text-gray-700 mb-2">
//                     Reps for Highest Weight:{" "}
//                     {
//                       exercise.data.find(
//                         (d) =>
//                           d.weight ===
//                           Math.max(...exercise.data.map((d) => d.weight || 0))
//                       )?.reps || 0
//                     }
//                   </h4>
//                   <Line
//                     data={{
//                       labels: exercise.data.map((d) => d.date || "N/A"),
//                       datasets: [
//                         {
//                           label: "Weight",
//                           data: exercise.data.map((d) => d.weight || 0),
//                           borderColor: "rgba(75, 192, 192, 1)",
//                           backgroundColor: "rgba(75, 192, 192, 0.2)",
//                           tension: 0.3,
//                         },
//                         {
//                           label: "Reps",
//                           data: exercise.data.map((d) => d.reps || 0),
//                           borderColor: "rgba(153, 102, 255, 1)",
//                           backgroundColor: "rgba(153, 102, 255, 0.2)",
//                           tension: 0.3,
//                         },
//                       ],
//                     }}
//                   />
//                 </div>
//               ) : (
//                 <p className="text-gray-600 mt-4">
//                   No valid data available for {exercise.name}.
//                 </p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-lg text-gray-500 mt-6">
//             No performance data available.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Performance;
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_URL = import.meta.env.VITE_API_URL;

const Performance = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/performance`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPerformanceData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching performance data", err);
        setLoading(false);
      }
    };

    fetchPerformance();
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="display-4 text-center" style={{color:"white",textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgb(255, 255, 255)"
}}>Your Workout Performance</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : performanceData.length > 0 ? (
        performanceData.map((exercise) => (
          <Card key={exercise.name} className="mb-4">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Card.Title>{exercise.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Highest Weight:{" "}
                    {Math.max(...exercise.data.map((d) => d.weight || 0))} kg
                  </Card.Subtitle>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-end">
                  <Button variant="info">
                    View Details
                  </Button>
                </Col>
              </Row>

              {exercise.data && exercise.data.length > 0 ? (
                <div className="mt-4">
                  <h5>
                    Reps for Highest Weight:{" "}
                    {
                      exercise.data.find(
                        (d) =>
                          d.weight ===
                          Math.max(...exercise.data.map((d) => d.weight || 0))
                      )?.reps || 0
                    }
                  </h5>
                  <Line
                    data={{
                      labels: exercise.data.map((d) => d.date || "N/A"),
                      datasets: [
                        {
                          label: "Weight",
                          data: exercise.data.map((d) => d.weight || 0),
                          borderColor: "rgba(75, 192, 192, 1)",
                          backgroundColor: "rgba(75, 192, 192, 0.2)",
                          tension: 0.3,
                        },
                        {
                          label: "Reps",
                          data: exercise.data.map((d) => d.reps || 0),
                          borderColor: "rgba(153, 102, 255, 1)",
                          backgroundColor: "rgba(153, 102, 255, 0.2)",
                          tension: 0.3,
                        },
                      ],
                    }}
                  />
                </div>
              ) : (
                <p style={{color:"white",opacity:"0.8"}}>No valid data available for {exercise.name}.</p>
              )}
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center" style={{color:"white",opacity:"0.8"}}>No performance data available.</p>
      )}
    </Container>
  );
};

export default Performance;
