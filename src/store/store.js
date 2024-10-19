import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import userProfileReducer from '../features/userProfile/userProfileSlice';
import userStatsReducer from '../features/userProfile/userProfileSlice';
import contactUsReducer from "../features/ContactUs/contactusSlice";
import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
import adReducer from "../features/Ad/adSlice";
import questionsReducer from '../features/questions/questionSlice';
import walletReducer from "../features/wallet/walletSlice";
import gameReducer from "../features/Game/gameSlice";
import { loadState, saveState } from '../utils/localStorageUtils'; 
const preloadedState = loadState();


const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    userProfile: userProfileReducer,
    userStats: userStatsReducer,
    contactUs: contactUsReducer,
    leaderboard: leaderboardReducer,
    ads:adReducer,
    questions:questionsReducer,
    wallet: walletReducer,
    game: gameReducer,
  },
  preloadedState,

});


store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    userProfile: store.getState().userProfile, 
    wallet: store.getState().wallet,
  });
});

export default store;







