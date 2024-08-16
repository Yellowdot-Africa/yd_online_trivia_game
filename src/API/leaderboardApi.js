import axios from "axios";

const leaderboardAPI_BASE_URL =
  "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/ShowLeaderboard";

export const fetchLeaderboard = async (gameId, token) => {
  try {
    const response = await axios.get(
      `${leaderboardAPI_BASE_URL}?gameID=${gameId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.log("error 404");
    console.error('API Error:', error.response ? error.response.data : error);
    if (error.response && error.response.status === 404) {
      return []; 
    }
    throw error.response ? error.response.data : new Error("API Error");
  }
};





