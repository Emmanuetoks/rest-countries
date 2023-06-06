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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home currentCards={currentCards} />} />
        <Route path="country/:id" element={<Country />} />
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
    const filterBox = document.querySelector('.navigation__datalist');

    console.log(filterBox);
    root.addEventListener("click", (e) => {
      console.log(e.target);
      if (
        e.target.classList.contains("navigation__filterbox") ||
        e.target.classList.contains("navigation__input")
      ) {
        console.log("hello");
      } else {
        console.log(filterBox);
        if (filterBox.style.display != "none") {
          console.log('comn');
          filterBox.style.display = "none";
        }
      }
    });
  }, []);

  return (
    <>
      <CountryData.Provider value={[countries, setCurrentCards]}>
        {/* Header Section */}
        <header>
          <NavBar />
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
