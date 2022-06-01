import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

/*
    ContextProvider
    berfungsi untuk mendeklarasikan provider context yang akan di kaitkan dengan app.js
*/
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

/*
    useStateContext
    berfungsi untuk mendapatkan data state yg di set value provider yang digunakan untuk child component yg membutuhkannya
    
*/
export const useStateContext = () => useContext(StateContext);
