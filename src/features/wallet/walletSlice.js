import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  walletBalance: 0,
  depositResponse: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletBalance(state, action) {
      // state.walletBalance = action.payload;
      state.walletBalance = Number(action.payload); 
    },
    updateBalance(state, action) {
      // state.walletBalance += action.payload;
      state.walletBalance += Number(action.payload);
    },
  
    setDepositResponse(state, action) {
      state.depositResponse = action.payload;
    },
    clearDepositResponse(state) {
      state.depositResponse = null;
    },
  },
});

export const { setWalletBalance, updateBalance, setDepositResponse, clearDepositResponse } = walletSlice.actions;

export default walletSlice.reducer;





// npm install redux-persist

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import userProfileReducer from './features/userProfile/userProfileSlice';
// import walletReducer from './features/wallet/walletSlice';

// // Configure redux-persist
// const persistConfig = {
//   key: 'root',
//   storage, // Use localStorage to persist the state
//   whitelist: ['userProfile', 'wallet'], // Only persist these reducers
// };

// const persistedUserProfileReducer = persistReducer(persistConfig, userProfileReducer);
// const persistedWalletReducer = persistReducer(persistConfig, walletReducer);

// const store = configureStore({
//   reducer: {
//     userProfile: persistedUserProfileReducer,
//     wallet: persistedWalletReducer,
//   },
// });

// const persistor = persistStore(store);

// export { store, persistor };



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import App from './App';
// import { store, persistor } from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );
// const rootReducer = combineReducers({
//   auth: authReducer,
//   categories: categoriesReducer,
//   userProfile: userProfileReducer,
//   wallet: walletReducer,
//   userStats: userStatsReducer,
//   contactUs: contactUsReducer,
//   leaderboard: leaderboardReducer,
//   ads: adReducer,
//   questions: questionsReducer,
//   game: gameReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST'], // Ignore the persist action
//         ignoredPaths: ['userProfile.someNonSerializableField'], // Specify any non-serializable fields here
//       },
//     }),
// });







// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import categoriesReducer from '../features/categories/categoriesSlice';
// import userProfileReducer from '../features/userProfile/userProfileSlice';
// import userStatsReducer from '../features/userProfile/userProfileSlice';
// import contactUsReducer from '../features/ContactUs/contactusSlice';
// import leaderboardReducer from '../features/leaderboard/leaderboardSlice';
// import adReducer from '../features/Ad/adSlice';
// import questionsReducer from '../features/questions/questionSlice';
// import walletReducer from '../features/wallet/walletSlice';
// import gameReducer from '../features/Game/gameSlice';
// import { loadState, saveState } from './localStorageUtils'; // Import the local storage utils

// const preloadedState = loadState(); // Load initial state from local storage

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     categories: categoriesReducer,
//     userProfile: userProfileReducer,
//     wallet: walletReducer,
//     userStats: userStatsReducer,
//     contactUs: contactUsReducer,
//     leaderboard: leaderboardReducer,
//     ads: adReducer,
//     questions: questionsReducer,
//     game: gameReducer,
//   },
//   preloadedState, // Set the preloaded state
// });

// // Subscribe to store updates and save state to local storage
// store.subscribe(() => {
//   saveState({
//     userProfile: store.getState().userProfile, // Save specific slices you want to persist
//     wallet: store.getState().wallet,
//   });
// });

// export default store;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setWalletBalance } from '../features/wallet/walletSlice';

// const WalletComponent = () => {
//   const dispatch = useDispatch();
//   const walletBalance = useSelector((state) => state.wallet.walletBalance);

//   const handleUpdateBalance = () => {
//     const newBalance = prompt('Enter new wallet balance:');
//     if (newBalance) {
//       dispatch(setWalletBalance(newBalance));
//     }
//   };

//   return (
//     <div>
//       <h1>Wallet Balance: {walletBalance}</h1>
//       <button onClick={handleUpdateBalance}>Update Balance</button>
//     </div>
//   );
// };

// export default WalletComponent;
