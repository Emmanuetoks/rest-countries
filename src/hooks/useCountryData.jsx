import { useContext, useEffect, useState } from "react";
import CountryData from "../context/CountryData";

function useCountryData() {
  const data = useContext(CountryData);
  const [countryData, setCountryData] = useState(data);
const [refresh, setRefresh] = 

  useEffect(() => {
    data.then(res => setCountryData(res))
  })

  return [countryData, setCountryData];
}

export default useCountryData;
