import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
const Next5Days = ({ data3Days }) => {
  // const [data, setdata] = useState(initialState)
  // useEffect(() => {
  //     if (data3Days) {
  //         const newData = data3Days.forecast.forecastday;
  //         setData(newData);
  //         console.log(data)
  //     }
  //     console.log('>>',data)
  // }, [data])
  return (
    <Wrapper>
      <Container>
        <Grid container>
          {data3Days
            ? data3Days.forecast.forecastday.map((item, idx) => {
                return (
                  <Grid key={idx}>
                    <Paper elevation={3}>
                      <h1>{moment(item.date).format("ddd")} </h1>
                      <h1>
                        {moment(item.date).date()}/
                        {moment(item.date).month() + 1}
                      </h1>
                      <img src={item.day.condition.icon} alt="weather" />
                      <h1>{item.day.avgtemp_c}&#176;C</h1>
                    </Paper>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Grid)`
  div {
    justify-content: center;
    padding: 8px 25px;
    border-radius: 30px;
  }
  .MuiPaper-rounded:hover {
    transform: translateY(-3px);
    background-color: #f1f5f8;
  }
`;
export default Next5Days;
