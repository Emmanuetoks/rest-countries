import { useContext, useState } from "react";
import CountryData from "../context/CountryData";

const SearchBar = () => {
  const [mainData, updateCard] = useContext(CountryData);
  const [searchKey, setSearchKey] = useState("");

    /**
     * mainData is the list containing all the data
     * 
     * updateCard is the stateSetter function that is used to update the card un the UI
     */

  const searchForCountry = (value) => {
    const myRegex = /[A-Za-z]/;
    if (myRegex.test(value)) {
      const result = mainData.filter((country) => {
        if (country.name.toLocaleLowerCase().startsWith(value)) {
          return true;
        }
      });
      updateCard(result);
    } else {
      updateCard(mainData);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(searchKey);
    setSearchKey(e.target.value);
    searchForCountry(e.target.value);
  };
  return (
    <div className="navigation__searchbar bg-card  ">
      <input
        value={searchKey}
        // onChange={handleChange}
        onInput={handleChange}
        className="text-accent-200 fw-200 navigation__input"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
