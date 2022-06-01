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
  const [isClicked, setIsClicked] = useState(initialState);

  //   state for get initial screen size
  const [screenSize, setScreenSize] = useState(undefined);

  //   function for handle click navbar
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

/*
    useStateContext
    berfungsi untuk mendapatkan data state yg di set value provider yang digunakan untuk child component yg membutuhkannya
    
*/
export const useStateContext = () => useContext(StateContext);
