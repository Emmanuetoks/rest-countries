/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CountryData from "../context/CountryData";

const Country = ({ theme }) => {
  const [allCountries] = useContext(CountryData);
  const [mainData, setMainData] = useState(null);
  const { id } = useParams();
  let languages = [];
  let currencies = [];
  let nativeName = [];
  let borderCountries = [];

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        const data = await res.json();
        setMainData(data);
        // console.log(mainData[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (mainData) {
    let langData = mainData[0].languages;
    let curData = mainData[0].currencies;
    let natData = mainData[0].name.nativeName;
    let borderData = mainData[0]?.borders;

    for (const key in langData) {
      languages.push(langData[key]);
    }

    for (const key in curData) {
      currencies.push(curData[key]);
    }

    for (const key in natData) {
      nativeName.push(natData[key].official);
    }

    if (borderData) {
      allCountries &&
        allCountries.forEach((element) => {
          if (borderData.includes(element.alpha3Code)) {
            borderCountries.push(element.name);
            console.log(element.name);
          }
        });
    } else {
      borderCountries.push("No Border Countries");
    }
  }

  return (
    mainData && (
      <main className="main--country main grid">
        <div className="main__navigation navigation">
          <Link to={"/"}>
            <button className="main--country__back-button bg-card capitalize text-accent-200 fw-100 flex">
              {theme === "dark" ? (
                <AiOutlineArrowLeft fill="white" />
              ) : (
                <AiOutlineArrowLeft />
              )}
              back
            </button>
          </Link>
        </div>

        <figure className="main--country__card grid">
          <div className="main--country__container-flag main--country__section">
            <img src={mainData[0].flags.png} alt={mainData[0].flags.alt} />
          </div>
          <figcaption className="main--country__caption main--country__section flex">
            <h2 className="text-accent-200 fw-300 capitalize">
              {mainData[0].name.common}
            </h2>
            <div className="main--country__info flex">
              <div className="main--country__main-info ">
                <p className="text-accent-200 fw-200">
                  Native Name:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {nativeName[0]}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Population:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].population}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Region:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].region}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Sub Region:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].subregion}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Capital:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].capital}
                  </span>
                </p>
              </div>

              <div className="main--country__other-info">
                <p className="text-accent-200 fw-200">
                  Top Level Domain:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].tld[0]}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Currencies:
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {currencies.map((currency) => currency.name)}
                  </span>
                </p>
                <p className="text-accent-200 fw-200">
                  Languages:{" "}
                  {languages?.map((lang) => (
                    <span
                      key={lang}
                      className="text-accent-100 fw-100 capitalize"
                    >
                      {lang + " "}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="main--country__info-footer flex">
              <p className="text-accent-200 fw-200">Border Countries: </p>
              <div className="main--country__border-countries flex">
                {borderCountries.map((borderCountry) => (
                  <p
                    className="bg-card main--country__border-country text-accent-100 fw-100"
                    key={borderCountry}
                  >
                    {borderCountry}
                  </p>
                ))}
              </div>
            </div>
          </figcaption>
        </figure>
      </main>
    )
  );
};

export default Country;
