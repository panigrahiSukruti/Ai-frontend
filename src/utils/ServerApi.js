import axios from "axios";

const github_api = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 6000 // request timeout in milliseconds
});

// Request interceptor
github_api.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Response interceptor
  github_api.interceptors.response.use(
    response => {
      // Do something with response data
      return response;
    },
    error => {
      // Do something with response error
      return Promise.reject(error);
    }
  );

  export default github_api;