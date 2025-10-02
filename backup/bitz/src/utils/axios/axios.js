import axios from 'axios';

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: '127.0.0.1:8000/api', // Your API base URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you need here
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Retrieve the token from local storage
    const token = localStorage.getItem('Token');

    // If a token exists, add it to the request headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // You can add more headers or modify existing ones here
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
