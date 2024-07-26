import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      App
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </nav>
    </>
  );
};

export default Header;
