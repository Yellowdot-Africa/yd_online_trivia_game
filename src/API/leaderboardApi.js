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
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("API Error");
  }
};
