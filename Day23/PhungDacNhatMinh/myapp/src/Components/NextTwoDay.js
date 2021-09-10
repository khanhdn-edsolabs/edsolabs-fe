import React from "react";
import PropTypes from "prop-types";

NextTwoDay.propTypes = {
  weatherObj: PropTypes.object.isRequired,
};

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const formatDays = (e) => {
  const arrDate = e.split("-");
  arrDate.shift();
  return arrDate.reverse().join("/");
};

const getDayOnWeek = (e) => {
  const newDay = new Date(e);
  const day = newDay.getDay();
  return days[day];
};

function NextTwoDay(props) {
  const { weatherObj } = props;
  // console.log(weatherObj);
  return (
    <>
      {typeof weatherObj.location !== "undefined" ? (
        <div className="d-flex justify-content-around text-center">
          <div>
            <li className="mb-0">
              {getDayOnWeek(weatherObj.forecast.forecastday[1].date)}
            </li>
            <li>{formatDays(weatherObj.forecast.forecastday[1].date)}</li>
            <li>
              {" "}
              {Math.trunc(weatherObj.forecast.forecastday[1].day.avgtemp_c)}
              &deg;C
            </li>
          </div>
          <div>
            <li className="mb-0">
              {getDayOnWeek(weatherObj.forecast.forecastday[2].date)}
            </li>
            <li>{formatDays(weatherObj.forecast.forecastday[2].date)}</li>
            <li>
              {Math.trunc(weatherObj.forecast.forecastday[2].day.avgtemp_c)}
              &deg;C
            </li>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NextTwoDay;
