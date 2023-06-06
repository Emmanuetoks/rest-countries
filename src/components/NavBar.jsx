import { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const NavBar = ({theme, setTheme}) => {
  const root = document.getElementById("root");
  let rootTheme = root.className;
  const changeTheme = () => {
    rootTheme === "dark-mode" && (root.className = "light-mode");
    rootTheme === "dark-mode" && setTheme("light");

    rootTheme === "light-mode" && (root.className = "dark-mode");

    rootTheme === "light-mode" && setTheme("dark");
  };
  return (
    <div className="navbar flex bg-navbar">
      {/* The navbar logo    */}
      <h2 className="text-accent-200 fw-300">Where in the world?</h2>
      {/* The Theme toggle button */}

      <button onClick={changeTheme} className="navbar__theme-toggler flex">
        <span>{theme === "dark" ? <BsMoonFill  fill="white"/> : <BsMoon/>}</span>
        <span className="text-accent-200 fw-100">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    </div>
  );
};

export default NavBar;
