import { createSlice } from '@reduxjs/toolkit';
import { quizData } from './Data.json';

const initialState = {
  questions: quizData,
  currentQuestion: 0,
  score: 0,
  selectedOption: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },

    //answer select kiye and next pe click kiye
    submitOneAnswer: (state) => {
      const correctAnswer = state.questions[state.currentQuestion].answer;
      if (state.selectedOption === correctAnswer) {
        state.score += 1;
      }
      state.currentQuestion += 1;
      state.selectedOption = null;
    },

    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
      state.selectedOption = null;
    },
  },
});

export const { setSelectedOption, submitOneAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;



/* if you use api call

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuizData = createAsyncThunk('quiz/fetchQuizData', async () => {
  const res = await axios.get('https://quizdata');
  return res.data;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuestion: 0,
    score: 0,
    selectedOption: null,
    loading: false,
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    submitOneAnswer: (state) => {
      const correctAnswer = state.questions[state.currentQuestion].answer;
      if (state.selectedOption === correctAnswer) {
        state.score += 1;
      }
      state.currentQuestion += 1;
      state.selectedOption = null;
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
      state.selectedOption = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuizData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedOption, submitOneAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;

*/

