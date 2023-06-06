/* eslint-disable react/prop-types */
import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import Card from "../components/Card";

const Home = ({ currentCards, theme }) => {
  return (
    <main className="main">
      <div className="main__navigation navigation flex">
        <SearchBar theme={theme} />
        <FilterBox theme={theme}/>
      </div>
      <div className="container-card grid">
        {currentCards &&
          currentCards.map((country) => (
            <Card
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              id={country.alpha3Code}
              image={country.flags.png}
            />
          ))}
        {currentCards && currentCards.length === 0 ? <ResultError /> : ""}
      </div>
    </main>
  );
};

function ResultError() {
  return (
    <div className="place-self-center text-align-center ">
      <h2 className="text-accent-200 fw-300">No Results</h2>
      <p className="text-accent-100 fw-100">Check your spelling</p>
    </div>
  );
}
export default Home;
