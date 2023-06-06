import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CountryData from "./context/CountryData";
import "../CSS/themes.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(null);
  const [currentCards, setCurrentCards] = useState(null);
  const [theme, setTheme] = useState("dark");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home currentCards={currentCards} theme={theme}/>} />
        <Route path="country/:id" element={<Country theme={theme}/>} />
      </>
    )
  );

  // Get data from local json file;
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let ignore = false;
    const fetchCountryData = async () => {
      try {
        const res = await fetch("../data.json");
        const data = await res.json();
        setCountries(data);
        setCurrentCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
    return () => (ignore = true);
  }, []);

  useEffect(() => {
    const root = document.querySelector("#root");
    const filterBox = document.querySelector(".navigation__datalist");

    root.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("navigation__filterbox") ||
        e.target.classList.contains("navigation__input")
      ) {
        null;
      } else {
        if (filterBox.style.display !== "none") {
          filterBox.style.display = "none";
        }
      }
    });
  }, [countries]);

  return (
    <>
      <CountryData.Provider value={[countries, setCurrentCards]}>
        {/* Header Section */}
        <header>
          <NavBar theme={theme} setTheme={setTheme}/>
        </header>
        {/* Main Body */}
        {/* <Home currentCards={currentCards} /> */}
        {/* <Country /> */}
        <RouterProvider router={router} />
      </CountryData.Provider>
    </>
  );
}

export default App;
