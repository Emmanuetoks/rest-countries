import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterBox from "./components/FilterBox";
import Card from "./components/Card";
import CountryData from "./context/CountryData";
import "../CSS/themes.css";

function App() {
  const [countries, setCountries] = useState(null);
  const [updateCard, setUpdateCard] = useState(null)

  // Get data from local json file;
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let ignore = false;
    const fetchCountryData = async () => {
      try {
        const res = await fetch("../data.json");
        const data = await res.json();
        setCountries(data);
        setUpdateCard(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
    return () => (ignore = true);
  }, []);

  document.getElementById("root").classList = "dark-mode";
  return (
    <>
      <CountryData.Provider value={[countries, setUpdateCard]}>
        {/* Header Section */}
        <header>
          <NavBar />
        </header>
        {/* Main Body */}
        <main className="main">
          <div className="navigation flex">
            <SearchBar />
            <FilterBox />
          </div>
          <div className="container-card grid">
            {updateCard &&
              updateCard.map((country) => (
                <Card
                  key={country.name}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))}
          </div>
        </main>
      </CountryData.Provider>
    </>
  );
}

export default App;
