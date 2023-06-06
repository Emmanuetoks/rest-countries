/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import CountryData from "../context/CountryData";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const FilterBox = ({theme}) => {
  const [mainData, updateUI] = useContext(CountryData);
  const [filterKeyWord, setFilterKeyWord] = useState("");
  const [datalistShow, setDataListShow] = useState(false);
  const filter = useRef(null);
  const dataList = useRef(null);

  const handleOptionClick = (e) => {
    setDataListShow(false);
    dataList.current.style.display = "none";
    filter.current.value = e.target.value;
    setFilterKeyWord(e.target.value);

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
    setDataListShow(true);
    dataList.current.style.display = "flex";
  };
  return (
    <div className="navigation__filterbox bg-card pos-rel flex">
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
      <span>
        {datalistShow ? theme==='dark'?<RiArrowDropUpLine fill="white" />:<RiArrowDropUpLine/> : theme !== 'dark' ? <RiArrowDropDownLine fill/>: <RiArrowDropDownLine fill="white"/>}
      </span>
      <dataList
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
          value="Americas"
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
      </dataList>
    </div>
  );
};

export default FilterBox;
