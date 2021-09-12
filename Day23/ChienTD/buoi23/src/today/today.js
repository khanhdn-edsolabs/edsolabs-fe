import "./today.css";
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";

// Style boder
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "40rem", height: "15rem" },
};

const Today = (props) => {
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (props && props.weather.location) {
      console.log(props);
      const oldName = props.weather.location.name;
      const oldCountry = props.weather.location.country;
      setName(oldName);
      setCountry(oldCountry);
      setData(props);
    }
  }, [props]);

  return (
    <Box
      {...defaultProps}
      display="inline-block"
      borderRadius={20}
      width="100%"
    >
      <h2>
        Today's Weather in {name}, {country}
      </h2>
      {data ? (
        <Box className="content-weather" display="flex" width={1}>
          <Box className="temperature" display="flex" width="60%" ml={4}>
            <Box width="50%">
              <img
                src={data.weather.current.condition.icon}
                alt="this is icon"
                width="100%"
              />
            </Box>
            <Box width="40%" textAlign="left" pt={3}>
              <h3>{data.weather.current.condition.text}</h3>
              <h2>{data.weather.current.temp_c} °C</h2>
            </Box>
          </Box>
          <Box className="additional-weather" width="50%" textAlign="left">
            <h3>Wind: {data.weather.current.wind_kph} kmph</h3>
            <h3>Pricip: {data.weather.current.precip_mm} mm</h3>
            <h3>Pressure: {data.weather.current.pressure_mb} mb</h3>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Today;
