import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.jwt;
    if (!token) {
        return rejectWithValue('No token found');
      }
    try {
      const response = await axios.get(
        'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=1&gameID=1&language=english',
        {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data || [];
    } catch (error) {
      return rejectWithValue(error.response.data);
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
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
      state.answers = state.questions[state.currentQuestionIndex]?.answers || [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.answers = action.payload[state.currentQuestionIndex]?.answers || [];
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentQuestionIndex } = questionSlice.actions;

export default questionSlice.reducer;
