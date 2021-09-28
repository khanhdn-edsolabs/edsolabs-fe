import moment from "moment";
import { Fragment } from "react";
import Weather3day from "./Weather3day";
export default function Detailsearch(e) {
  const { city } = e;
  return (
    <Fragment>
      {typeof city.location != "undefined" ? (
        <div>
          <div className="addresscity">
            <h2>
              Today's Weather in {city.location.name}, {city.location.country}
            </h2>
            <div className="address_info">
              <div className="icon_weather">
                <img
                  src={city.current.condition.icon}
                  alt=""
                  className="tempIcon"
                ></img>
                <div>
                  <p>{city.current.condition.text}</p>
                  <p>{city.current.temp_c} °c</p>
                </div>
              </div>
              <div className="other">
                <p>Wind: {city.current.wind_kph} kph</p>
                <p>Precip: {city.current.precip_mm} mm</p>
                <p>Pressure: {city.current.pressure_mb} mb</p>
              </div>
            </div>
          </div>
          <h3>Next 3 day forecast</h3>

          <Weather3day city={city} />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
