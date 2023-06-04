import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterBox from "./components/FilterBox";
import Card from "./components/Card";
import CountryData from "./context/CountryData";
import "../CSS/themes.css";

function App() {
  const [countries, setCountries] = useState(null);
  const [updateCard, setUpdateCard] = useState(null);

  // Get data from local json file;
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let ignore = false;
    const fetchCountryData = async () => {
      try {
        const res = await fetch("../data.json");
        const data = await res.json();
        setCountries(data);
        setUpdateCard(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
    return () => (ignore = true);
  }, []);
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
            {updateCard && updateCard.length === 0 ? <ResultError /> : ""}
          </div>
        </main>
      </CountryData.Provider>
    </>
  );
}

function ResultError() {
  return (
    <div className="place-self-center text-align-center ">
      <h2 className="text-accent-200 fw-300">No Results</h2>
      <p className="text-accent-100 fw-100">Check your spelling</p>
    </div>
  );
}

export default App;
