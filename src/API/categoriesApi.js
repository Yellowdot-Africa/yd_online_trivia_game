import axios from 'axios';

const categoriesApi = axios.create({
  baseURL: "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia",
});

const gamesApi = axios.create({
  baseURL: "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia",
  
})

export const fetchCategories = (token) => {
  return categoriesApi.get("/GameCategory/GetCategories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  
  
   } );
};


export const fetchGames = (token)=>{
  return gamesApi.get("/Games/GetGames", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default { fetchCategories, fetchGames };







