import { useContext, useRef, useState } from "react";
import CountryData from "../context/CountryData";

const FilterBox = () => {
  const [mainData, updateUI] = useContext(CountryData);
  const [filterKeyWord, setFilterKeyWord] = useState("");
  const filter = useRef(null);
  const dataList = useRef(null);

  const handleOptionClick = (e) => {
    // dataList.current.preventDefault()
    dataList.current.style.display = "none";
    filter.current.value = e.target.value;
    setFilterKeyWord( e.target.value)

    const result = mainData.filter((country) => {
      if (country.region.toLowerCase() === filter.current.value.toLowerCase()) {
        return true;
      }
    });

    updateUI(result);
  };

  const handleChange = (e) => {
    setFilterKeyWord(e.currentTarget.value);
  };

  const handleInputClick = () => {
    dataList.current.style.display = "flex";
  };
  return (
    <div className="navigation__filterbox bg-card pos-rel">
      <input
        list=""
        onClick={handleInputClick}
        onChange={handleChange}
        onInput={() => (filter.current.value = "")}
        id="filterInput"
        ref={filter}
        className="text-accent-200 navigation__input fw-100"
        placeholder="Filter by Region"
        value={filterKeyWord}
      />
      <datalist
        ref={dataList}
        className="navigation__datalist pos-abs bg-card flex"
        id="region"
      >
        <option
          onClick={handleOptionClick}
          className="text-accent-200 fw-100 navigation__option"
          value="Africa"
        >
          Africa
        </option>
        <option
          onClick={handleOptionClick}
          className="text-accent-200 fw-100 navigation__option"
          value="America"
        >
          Americas
        </option>
        <option
          onClick={handleOptionClick}
          className="text-accent-200 fw-100 navigation__option"
          value="Asia"
        >
          Asia
        </option>
        <option
          onClick={handleOptionClick}
          className="text-accent-200 fw-100 navigation__option"
          value="Europe"
        >
          Europe
        </option>
        <option
          onClick={handleOptionClick}
          className="text-accent-200 fw-100 navigation__option"
          value="Oceania"
        >
          Oceania
        </option>
      </datalist>
    </div>
  );
};

export default FilterBox;
