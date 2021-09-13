import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

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
        <div className="">
          <header>
            <h4>Next 2 day forecast</h4>
          </header>
          <Box
            className=""
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Box
              className="nextDay"
              border={1}
              borderRadius={10}
              padding={1}
              margin={2}
            >
              <Box pb={1}>
                {getDayOnWeek(weatherObj.forecast.forecastday[1].date)}
              </Box>
              <li>{formatDays(weatherObj.forecast.forecastday[1].date)}</li>
              <img
                src={weatherObj.forecast.forecastday[1].day.condition.icon}
                alt=""
              />
              <li>
                <h4>
                  {Math.trunc(weatherObj.forecast.forecastday[1].day.avgtemp_c)}
                  &deg;C
                </h4>
              </li>
            </Box>
            <Box
              className="nextDay"
              border={1}
              borderRadius={10}
              padding={1}
              margin={2}
            >
              <Box pb={1}>
                {getDayOnWeek(weatherObj.forecast.forecastday[2].date)}
              </Box>
              <li>{formatDays(weatherObj.forecast.forecastday[2].date)}</li>
              <img
                src={weatherObj.forecast.forecastday[2].day.condition.icon}
                alt=""
              />
              <li>
                <h4>
                  {Math.trunc(weatherObj.forecast.forecastday[2].day.avgtemp_c)}
                  &deg;C
                </h4>
              </li>
            </Box>
          </Box>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NextTwoDay;
