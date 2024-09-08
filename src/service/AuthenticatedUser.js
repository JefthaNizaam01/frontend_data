import axios from 'axios';

// Function to set the authorization token for requests
export function applyToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

// Add a response interceptor to handle unauthorized responses
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Unauthorized, redirect to login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
