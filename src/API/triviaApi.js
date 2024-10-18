import axios from "axios";

export const getUserQuestions = async (packId, gameId, language, token) => {
  try {
    const response = await axios.post(
      "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/QuestionPack/GetUserQuestions",
      {
        packId,
        gameId,
        language,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Pack ID:", packId);
    console.log("Game ID:", gameId);
    console.log("Language:", language);

    console.log("API Response:", response.data.data);

    if (
      response.data.statusCode === "999" &&
      response.data.statusMessage === "RequestOk"
    ) {
      return response.data.data;
    } else {
      console.error("Error fetching questions:", response.data.message);
      return [];
    }
  } catch (error) {
    console.error("API call failed:", error);
    return [];
  }
};

export const submitPackAnswer = async (packId, gameId, answers, token) => {
 try {
    const response = await axios.post(
    "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitPackAnswer",
    {
      questionPackID: packId,
      gameID: gameId,
      answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Submit Response:", response.data);

  return response.data;
} catch (error) {
    console.error("Error submitting answers:", error);
    return null;
  }

};
