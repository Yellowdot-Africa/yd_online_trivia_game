import axios from "axios";


const loginBaseUrl = "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia"

const signupBaseUrl = "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia"


export const loginApi = axios.create({
    baseURL: loginBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });


  export const signupApi = axios.create({
    baseURL: signupBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });
  

//  this is done to a request interceptor which include authorization token
loginApi.interceptors.request.use(
  (config) => {
    //config can be modified here before returning it
    const jwtToken = localStorage.getItem("jwt");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    // this handle request error
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
