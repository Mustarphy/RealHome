import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://connectapi-rwa1.onrender.com",
  withCredentials: true,
});


apiRequest.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("currentUser")); 
  const token = user?.token;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiRequest;
