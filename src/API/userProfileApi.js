import axios from "axios";

const userprofileAPI_BASE_URL =
  "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUserStats";

export const fetchUserStats = async (userID, token) => {
  try {
    const response = await axios.get(
      `${userprofileAPI_BASE_URL}?userID=${userID}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("API Error");
  }
};

export const updateUserProfileApi = async ({
  id,
  username,
  email,
  msisdn,
  token,
}) => {
  const response = await axios.put(
    "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/UpdateProfile",
    {
      id,
      username,
      email,
      msisdn,
      password: "password",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const fetchUserById = async (userID, token) => {
  try {
    const response = await axios.get(
      `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUserById/${userID}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("API Error");
  }
};
