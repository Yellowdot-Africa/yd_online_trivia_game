// import axios from 'axios';

// const TRIVIA_BASE_URL = 'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser';

// export const getQuestionsForUser = async (categoryID, gameID, language = 'english', token) => {
//     console.log("Token:", token);
//     console.log("Category ID:", categoryID);
//   try {
//     const response = await axios.get(
//       `${TRIVIA_BASE_URL}?categoryID=${categoryID}&gameID=${gameID}&language=english`,
//       {
//         // params: { categoryID, gameID, language },
//         headers: {
//             Authorization: `Bearer ${token}`
//           }
//       }
//     );
//     return response.data;

//   } catch (error) {
//     // console.error("Failed to fetch questions", error);
//     // throw error;
//     throw error.response ? error.response.data : new Error("Failed to fetch questions");

//   }
// };


