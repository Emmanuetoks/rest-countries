/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Card = ({
  name = "germany",
  population = "81,770,900",
    image,
  region = "europe",
  capital = "berlin",
  id,
}) => {
  return (
    <Link to={`/country/${id}`}>
      <figure className="card bg-card">
        <div className="container-flag card__section">
        <img src={image} />
      </div>

        <figcaption className="card__section card__caption flex">
          <h4 className="text-accent-200 capitalize fw-300">{name}</h4>
          <div className="card__country-information flex">
            <p className="fw-200 text-accent-200">
              Population:{" "}
              <span className="fw-100 text-accent-100 capitalize">
                {" "}
                {population}
              </span>
            </p>
            <p className="fw-200 text-accent-200">
              Region:{" "}
              <span className="fw-100 text-accent-100 capitalize">
                {" "}
                {region}
              </span>
            </p>
            <p className="fw-200 text-accent-200">
              Capital:{" "}
              <span className="fw-100 text-accent-100 capitalize">
                {" "}
                {capital}
              </span>
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
