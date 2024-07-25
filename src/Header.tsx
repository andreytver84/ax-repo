import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      App
      <nav>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink> */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </>
  );
};

export default Header;
