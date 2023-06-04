import { useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterBox from "./components/FilterBox";
import Card from "./components/Card";
import CountryData from "./context/CountryData";
import "../CSS/themes.css";
import useCountryData from "./hooks/useCountryData";
function App() {
  const [countries, setCountries] = useCountryData();
  
  console.log(countries);
  document.getElementById("root").classList = "dark-mode";
  return (
    <>
      <CountryData.Provider value={countries}>
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
            {Array.isArray(countries) ?? countries.map(({ name, population, region, capital }) => {
              <Card
                name={name}
                population={population}
                region={region}
                capital={capital}
              />;
            })}
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </CountryData.Provider>
    </>
  );
}

export default App;
