import { createContext } from "react";

const fetchCountryData = async () => {
  const res = await fetch("../data.json");
  const data = await res.json()
  return data;
};

const CountryData = createContext(fetchCountryData());

export default CountryData;
