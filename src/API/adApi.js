import axios from "axios";

const API_URL =
  "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Adverts/GetAdverts";

export const fetchAdsFromAPI = async (token) => {
  // console.log("Token used in API request:", token);
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
