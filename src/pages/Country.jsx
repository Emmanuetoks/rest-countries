/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Country = () => {
  const [mainData, setMainData] = useState(null);
  const { id } = useParams();
  let languages = [];
  let currencies = [];
  console.log(mainData);
  let nativeName = [];

  Promise.all()
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
    for (const key in langData) {
      console.log(langData[key]);
      languages.push(langData[key]);
    }

    for (const key in curData) {
      currencies.push(curData[key]);
    }

    for (const key in natData) {
      nativeName.push(natData[key].official);
    }
  }
  return (
    mainData && (
      <main className="main--country main grid">
        <div className="main__navigation navigation">
          <Link to={"/"}>
            <button className="main__back-button bg-card capitalize text-accent-200 fw-100">
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
                <p className="text-accent-200 fw-100">
                  Native Name:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {nativeName[0]}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
                  Population:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].population}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
                  Region:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].region}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
                  Sub Region:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].subregion}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
                  Capital:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].capital}
                  </span>
                </p>
              </div>

              <div className="main--country__other-info">
                <p className="text-accent-200 fw-100">
                  Top Level Domain:{" "}
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {mainData[0].tld[0]}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
                  Currencies:
                  <span className="text-accent-100 fw-100">
                    {" "}
                    {currencies.map((currency) => currency.name)}
                  </span>
                </p>
                <p className="text-accent-200 fw-100">
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
              <p className="text-accent-200 fw-100">Border Countries: </p>
              <div className="main--country__border-countries flex">
                <p className="bg-card main--country__border-country text-accent-100 fw-100">
                  France
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
      </main>
    )
  );
};

export default Country;
