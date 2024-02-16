import React, { createContext, useContext, useState } from "react";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(0); 

  const updateBalance = (newBalance) => {
    setWalletBalance(newBalance);
  };

  return (
    <BalanceContext.Provider value={{ walletBalance, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  return useContext(BalanceContext);
};