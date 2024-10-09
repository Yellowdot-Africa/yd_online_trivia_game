import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
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



// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['userProfile', 'wallet'], 
//   };


  // const persistedUserProfileReducer = persistReducer(persistConfig, userProfileReducer);
  // const persistedWalletReducer = persistReducer(persistConfig, walletReducer);


const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    // userProfile: persistedUserProfileReducer,
    // wallet: persistedWalletReducer,
    userProfile: userProfileReducer,
    userStats: userStatsReducer,
    contactUs: contactUsReducer,
    leaderboard: leaderboardReducer,
    ads:adReducer,
    questions:questionsReducer,
    wallet: walletReducer,
    game: gameReducer,
  },
});

// const persistor = persistStore(store);
// export { store, persistor };

export default store;




// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
// import authReducer from "../features/auth/authSlice";
// import categoriesReducer from "../features/categories/categoriesSlice";
// import userProfileReducer from '../features/userProfile/userProfileSlice';
// import userStatsReducer from '../features/userProfile/userProfileSlice';
// import contactUsReducer from "../features/ContactUs/contactusSlice";
// import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
// import adReducer from "../features/Ad/adSlice";
// import questionsReducer from '../features/questions/questionSlice';
// import walletReducer from "../features/wallet/walletSlice";
// import gameReducer from "../features/Game/gameSlice";


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['userProfile', 'wallet'], 
// };

// const persistedUserProfileReducer = persistReducer(persistConfig, userProfileReducer);
// const persistedWalletReducer = persistReducer(persistConfig, walletReducer);

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     categories: categoriesReducer,
//     userProfile: persistedUserProfileReducer,
//     wallet: persistedWalletReducer,
//     userStats: userStatsReducer,
//     contactUs: contactUsReducer,
//     leaderboard: leaderboardReducer,
//     ads: adReducer,
//     questions: questionsReducer,
//     game: gameReducer,
//   },
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
//         ignoredPaths: ['register'],
//       },
//     }),
// });

// const persistor = persistStore(store);
// export { store, persistor };