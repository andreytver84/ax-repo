import { createContext, useEffect, useReducer, useState } from "react";

const AppContext = createContext({
  theme: "light",
  isLoggedIn: false,
  onToggleTheme: () => {},
  onLogin: () => {},
  onLogout: () => {},
});
const appReduser = (prevState, action) => {
  if (action.type === "SWITCH_THEME_TO_DARK")
    return {
      ...prevState,
      theme: action.value,
    };
  if (action.type === "SWITCH_THEME_TO_LIGHT")
    return {
      ...prevState,
      theme: action.value,
    };
};
export const AppProvider = (props) => {
  const [state, dispatchState] = useReducer(appReduser, {
    theme: "light",
    isLoggedIn: false,
  });
  //const [stateTheme, setSyateTheme] = useState<string>("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageInfoLogged = localStorage.getItem("isLoggedIn");
    const localStorageInfoTheme = localStorage.getItem("theme");

    if (localStorageInfoTheme === "light") {
      //setSyateTheme("light");
      dispatchState({ type: "SWITCH_THEME_TO_LIGHT", value: "light" });
    } else if (localStorageInfoTheme === "dark") {
      //setSyateTheme("dark");
      dispatchState({ type: "SWITCH_THEME_TO_DARK", value: "dark" });
    }

    if (localStorageInfoLogged === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const themeToggleHandler = () => {
    if (state.theme === "light") {
      dispatchState({ type: "SWITCH_THEME_TO_DARK", value: "dark" });
      //setSyateTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      dispatchState({ type: "SWITCH_THEME_TO_LIGHT", value: "light" });
      //setSyateTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const store = {
    theme: state.theme,
    isLoggedIn: isLoggedIn,
    onToggleTheme: themeToggleHandler,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};
export default AppContext;
