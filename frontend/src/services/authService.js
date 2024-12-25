import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// export const signin = async (credentials) => {
//   const response = await axios.post(`http://localhost:5000/api/auth/signin`, credentials);
//   return response.data;
// };
export const signin = async (credentials) => {
    console.log("Credentials:", credentials); // Debug Axios payload
    const response = await axios.post(`${API_URL}/auth/signin`, credentials);
    return response.data;
  };
  

export const signup = async (credentials) => {
    console.log("Credentials:", credentials); // Debug Axios payload

  const response = await axios.post(`${API_URL}/auth/signup`, credentials);
  return response.data;
};
