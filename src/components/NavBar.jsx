const NavBar = () => {
  const changeTheme = () => {
    const root = document.getElementById("root");
    let rootTheme = root.className;
    rootTheme === "dark-mode" && (root.className = "light-mode");
    rootTheme === "light-mode" && (root.className = "dark-mode");
  };
  return (
    <div className="navbar flex bg-navbar">
      {/* The navbar logo    */}
      <h2 className="text-accent-200 fw-300">Where in the world?</h2>
      {/* The Theme toggle button */}

      <button onClick={changeTheme} className="navbar__theme-toggler">
        <span className="text-accent-200 fw-100">Dark Mode</span>
      </button>
    </div>
  );
};

export default NavBar;
