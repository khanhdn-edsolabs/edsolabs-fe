import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    paper: {

        margin: '0 auto',
        marginTop: '30px',
        width: '100%',
        maxWidth: '600px',
        border: "1px solid #000",
        paddingTop: '10px'
    },
    flexSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        gap: '30px'
    },
    contentLeft: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        alignItems: 'center',
        width: '40%'
    },
    contentRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '15px',
        alignItems: 'flex-start',
        width: '30%',
        minHeight: '150px',
        rowGap: '30px',
        fontSize: '20px',
    },
    img: {
        width: '45%'
    },
    title: {
        textAlign: 'center'
    }
}));

const PaperWeather = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.paper} >
                <Typography variant="h4" component="h2" className={classes.title}>
                    Today's Weather in {props.city}
                </Typography>
                <CardContent className={`${classes.flexSpaceBetween} `}>
                    <div className={classes.contentLeft}>
                        <img className={classes.img} src={props.img} alt="" />
                        <div>
                            <p>{props.weather}</p>
                            <p>{props.temperature} °C</p>
                        </div>
                    </div>
                    <div className={classes.contentRight}>
                        <p>Wind: {props.wind} kmph</p>
                        <p>Precip: {props.precip} mm</p>
                        <p>Pressure: {props.pressure} mb</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


PaperWeather.propTypes = {
    main: PropTypes.bool,
    city: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    wind: PropTypes.number,
    precip: PropTypes.number,
    pressure: PropTypes.number,
}
export default PaperWeather;
