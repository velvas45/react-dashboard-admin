import React, { createContext, useContext, useState, useEffect } from "react";

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
  // state for set and change theme
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  // function for handle theme mode
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  //   function for handle click navbar
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  // set initial data from localStorage
  useEffect(() => {
    const initMode = window.localStorage.getItem("themeMode");
    const initColor = window.localStorage.getItem("colorMode");

    setCurrentColor(initColor);
    setCurrentMode(initMode);
  }, []);

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
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
