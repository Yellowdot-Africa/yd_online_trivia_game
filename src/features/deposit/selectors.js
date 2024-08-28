// import { createSelector } from 'reselect';

// const selectDepositState = (state) => state.deposit;
// const selectAuthState = (state) => state.auth || {};

// export const selectDepositData = createSelector(
//   [selectDepositState],
//   (depositState) => ({
//     amount: depositState.amount,
//     fullname: depositState.fullname,
//     email: depositState.email,
//     loading: depositState.loading,
//     error: depositState.error,
//     paymentUrl: depositState.paymentUrl,
//   })
// );

// export const selectMsisdn = createSelector(
//   [selectAuthState],
//   (authState) => authState.msisdn || ''
// );
