import axios from "axios";


const loginBaseUrl = "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia"

const signupBaseUrl = "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia"


export const loginApi = axios.create({
    baseURL: loginBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    
  });


  export const signupApi = axios.create({
    baseURL: signupBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    
  });
  

loginApi.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("jwt");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

signupApi.interceptors.request.use(
    (config) => {
      const jwtToken = localStorage.getItem('jwt');
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default { loginApi, signupApi };




