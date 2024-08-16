import axios from "axios";

const userprofileAPI_BASE_URL =
"https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUserStats"

export const fetchUserStats = async (userID, token) => {
    try {
      const response = await axios.get(
       `${userprofileAPI_BASE_URL}?userID=${userID}`,
    
      {
      
        headers: { Authorization: `Bearer ${token}`, },
      });
      return response.data;
    } catch (error) {
    
      throw error.response ? error.response.data : new Error("API Error");

    }
  };


