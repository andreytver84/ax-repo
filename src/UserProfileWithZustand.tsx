import { useEffect } from "react";
import { useStore } from "./store/useStore";

const user = {
  name: "Andrey",
  email: "a.uvikov@MediaList.ru",
};

const UserProfileWithZustand = () => {
  const ctx = useStore();

  // useEffect(() => {
  //   const localStorageInfoLogged = localStorage.getItem("isLoggedIn");
  //   const localStorageInfoTheme = localStorage.getItem("theme");

  //   if (localStorageInfoTheme === "light") {
  //     ctx.setTheme("light");
  //   } else if (localStorageInfoTheme === "dark") {
  //     ctx.setTheme("dark");
  //   }

  //   if (localStorageInfoLogged === "1") {
  //     ctx.onLogin();
  //   }
  // }, []);

  return (
    <div className={`${ctx.theme} userWrap`}>
      <h1>User</h1>
      <button onClick={ctx.onToggleTheme}>Toggle theme</button>
      <button onClick={ctx.onLogin}>Login</button>
      <button onClick={ctx.onLogout}>Logout</button>
      {ctx.isLoggedIn && (
        <div className="user">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfileWithZustand;
