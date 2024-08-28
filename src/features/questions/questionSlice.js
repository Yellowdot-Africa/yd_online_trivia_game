import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.jwt;
    const categoryID = state.categories.selectedCategory;
    const gameID = state.categories.selectedGame;
    const language = state.categories.selectedLanguage;

  // async ({ categoryID, gameID }, { getState, rejectWithValue }) => {
    // const token = getState().auth.jwt;
    // if (!token) {
    //   return rejectWithValue('No token found');
    // }

    console.log("Fetching questions with categoryID:", categoryID, "and gameID:", gameID);

    try {
      const response = await axios.get(
        // `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=${categoryID}&gameID=${gameID}&language=english`,
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser`,

        
          {
            params: {
              categoryID,
              gameID,
              language,
            },
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // return response.data.data || [];
      console.log("API Response:", response);

      // return response.data?.data || [];
      return response.data;


    } catch (error) {
      // return rejectWithValue(error.response.data);
      // return rejectWithValue(
      //   error.response?.data || 'An error occurred while fetching questions'
      // );
      const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
      return thunkAPI.rejectWithValue({message: errorMessage});
    }
  }
);

const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    loading: true,
    error: null,
    selectedCategoryID: null,
    selectedGameID: null,
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
      state.answers = state.questions[state.currentQuestionIndex]?.answers || [];
    },
    setCategoryAndGame: (state, action) => {
      state.selectedCategoryID = action.payload.categoryID;
      state.selectedGameID = action.payload.gameID;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload.data || [];
        state.answers = action.payload.data[state.currentQuestionIndex]?.answers || [];
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
        state.error = action.payload?.message || 'An error occurred while fetching questions';
        // state.error = action.payload.message || 'An error occurred while fetching questions';

        
      });
  },
});

export const { setCurrentQuestionIndex, setCategoryAndGame } = questionSlice.actions;

export default questionSlice.reducer;












