// import React from 'react';

// // apiService.js
// import axios from 'axios';

// // Create an Axios instance with default configuration
// const apiService = axios.post({
//   baseURL: 'https://api/YellowDotTrivia/GameCategory/CreateCategory', // Replace with your API base URL
//   timeout: 5000, // Adjust the timeout as needed
// });

// // Request interceptor for adding authentication headers or other common headers
// apiService.interceptors.request.use(
//   (config) => {
//     // You can add authentication headers or other common headers here if needed
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor for handling errors globally
// apiService.interceptors.response.use(
//   (response) => {
//     // Handle successful responses
//     return response.data;
//   },
//   (error) => {
//     // Handle errors globally
//     if (error.response) {
//       // Handle HTTP errors (e.g., 404, 500)
//       console.error('HTTP Error:', error.response.status, error.response.statusText);
//     } else if (error.request) {
//       // Handle network errors (e.g., no internet connection)
//       console.error('Network Error:', error.message);
//     } else {
//       // Handle other errors
//       console.error('Error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiService;
