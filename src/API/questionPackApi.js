import axios from "axios";

export const fetchQuestionPacksByCategory = async (categoryId, token) => {
  try {
    const response = await axios.get(
      `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/QuestionPack/GetByCategory/${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching question packs:", error);
    throw error;
  }
};

export const subscribeToPack = async (packId, token) => {
  try {
    const response = await axios.post(
      `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Subscribe?packId=${packId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error checking subscription:", error);
    throw error;
  }
};
