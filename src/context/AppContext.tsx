import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
  theme: "light",
  isLoggedIn: false,
  onToggleTheme: () => {},
  onLogin: () => {},
  onLogout: () => {},
});

export const AppProvider = (props) => {
  const [stateTheme, setSyateTheme] = useState<string>("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageInfoLogged = localStorage.getItem("isLoggedIn");

    if (localStorageInfoLogged === "1") {
      setIsLoggedIn(true);
    }
  });

  const themeToggleHandler = () => {
    if (stateTheme === "light") {
      setSyateTheme("dark");
    } else {
      setSyateTheme("light");
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
    theme: stateTheme,
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
