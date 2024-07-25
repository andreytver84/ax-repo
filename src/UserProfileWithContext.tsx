import { useContext } from "react";
import AppContext from "./context/AppContext";

const user = {
  name: "Andrey",
  email: "a.uvikov@MediaList.ru",
};

const UserProfileWithContext = () => {
  const ctx = useContext(AppContext);

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

export default UserProfileWithContext;
