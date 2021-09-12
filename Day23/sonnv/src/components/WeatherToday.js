import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Loading from './Loading';

const WeatherToday = ({ data, loading }) => {
    if (loading) return <Loading />
    return (
        <Wrapper>
            <Grid container >
                {data ?
                    (<Paper elevation={3} >
                        <h2>Todays's Weather in {data.location.name}, {data.location.country}</h2>
                        <Grid container >
                            <Grid container item xs={6} className="temperature">
                                <div >
                                    <img src={data.current.condition.icon} alt="weather" />
                                </div>
                                <div >
                                    <h4>{data.current.condition.text}</h4>
                                    <h2>{data.current.temp_c}&#176;C</h2>
                                </div>
                            </Grid >
                            <Grid item xs={6} className="title">
                                <h3>Wind: {data.current.wind_kph}kph</h3>
                                <h3>Precip: {data.current.precip_mm}mm</h3>
                                <h3>Pressure: {data.current.pressure_mb}mb</h3>
                            </Grid>
                        </Grid>
                    </Paper>
                    )
                    : null
                }
            </Grid >
        </Wrapper>
    )
}

const Wrapper = styled(Grid)`
div {
    justify-content: center;
    border-radius: 40px;
}
.MuiPaper-rounded:hover {
    transform: translateY(-3px);
}
.MuiPaper-rounded {
    padding : 10px 20px;
}
.temperature {
    display: flex;
	align-items: center;
}
.title{
    text-align: left;
    padding-left: 10%;
}
`;
export default WeatherToday;