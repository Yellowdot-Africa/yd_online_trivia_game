import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserQuestions = createAsyncThunk(
  "questions/fetchUserQuestions",
  async ({ packId }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.jwt;
    const categoryID = state.categories.selectedCategory;
    const gameId = state.categories.selectedGame;
    const language = state.categories.selectedLanguage;

    console.log("Calling getUserQuestions with:", {
      packId,
      gameId,
      language,
      token,
    });
    try {
      const response = await axios.post(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/QuestionPack/GetUserQuestions`,

        {
          packId,
          gameId,
          language,
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", response);

      // getUserQuestions(packId, gameId, language, token);
      return response.data.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Unknown error occurred";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
    // return rejectWithValue(error.message);
    // }
  }
);

export const submitAnswer = createAsyncThunk(
  "questions/submitAnswer",
  async ({ questionPackID, gameID, answers }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.jwt;

    try {
      const response = await axios.post(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitPackAnswer`,
        {
          questionPackID,
          gameID,
          answers,
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Unknown error occurred";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    loading: false,
    error: null,
    selectedCategoryID: null,
    selectedGameID: null,
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
      state.answers =
        state.questions[state.currentQuestionIndex]?.answers || [];
    },
    setCategoryAndGame: (state, action) => {
      state.selectedCategoryID = action.payload.categoryID;
      state.selectedGameID = action.payload.gameID;
    },
    setQuestions(state, action) {
      if (action.payload && action.payload.length > 0) {
        state.questions = action.payload;
      } else {
        state.error = "No questions available";
      }
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserQuestions.fulfilled, (state, action) => {
        state.loading = false;
        // state.questions = action.payload;
        const questions = action.payload ? action.payload : [];
        if (questions.length > 0) {
          state.questions = questions;
          state.answers = questions[state.currentQuestionIndex]?.answers || [];
        } else {
          state.questions = [];
          state.answers = [];
          state.error = "No questions found";
        }
        console.log("Payload Data:", action.payload);

        // state.questions = action.payload.data || [];
        // state.answers =
        //   action.payload.data[state.currentQuestionIndex]?.answers || [];
        // state.loading = false;
      })
      .addCase(fetchUserQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      .addCase(submitAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAnswer.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Answer Submitted: ", action.payload);
      })
      .addCase(submitAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to submit answer";
      });
  },
});

export const { setCurrentQuestionIndex, setCategoryAndGame } =
  questionSlice.actions;

export default questionSlice.reducer;

