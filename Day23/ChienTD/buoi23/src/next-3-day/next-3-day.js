import React , {useState , useEffect} from "react";
import { Box } from "@material-ui/core";
import dayjs from "dayjs";

// Style boder
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "30%", height: "15rem" },
};

const NextDay = (props) => {
  const [dataForecast,setDataForecast] = useState();
  useEffect(() => {
    props && setDataForecast( props.weatherForecast.forecast.forecastday)
  },[])


  return (
    <Box display="inline-block" width="100%" textAlign="center">
      <Box display="inline-block" width="40rem">
        <Box component="h2" textAlign="left">
          Next 3 day forecast
        </Box>
        <Box className="weather-next-3-day" display="flex">
          {dataForecast &&
            dataForecast.map((x) => {
              return (
                <Box {...defaultProps} borderRadius={20} textAlign="center" pt={3} key={"id" + Math.random()}>
                  <Box fontSize={20} fontWeight="bold">{dayjs(x.date).format("ddd")}</Box>
                  <Box fontSize={20} fontWeight="bold">{dayjs(x.date).format("D/M")}</Box>
                  <Box>
                      <img src={x.day.condition.icon} alt="this is image wearher" width="60%"/>
                  </Box>
                  <Box component="h3">{x.day.avgtemp_c} °C</Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default NextDay;
