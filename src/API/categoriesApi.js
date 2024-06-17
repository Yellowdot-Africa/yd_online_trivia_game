import axios from 'axios';

const categoriesApi = axios.create({
  baseURL: "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia",
});

export const fetchCategories = () => {
  return categoriesApi.get("/GameCategory/GetCategories");
};

export default categoriesApi;
