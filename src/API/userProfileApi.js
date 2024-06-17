import axios from 'axios';

const userProfileApi = axios.create({
  baseURL: 'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia',
  headers: {
    'Content-Type': 'application/json',
   
   
  },
});



export default userProfileApi;


