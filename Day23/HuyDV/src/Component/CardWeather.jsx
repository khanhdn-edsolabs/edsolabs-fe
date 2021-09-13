import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    wrap: {
        minWidth: '250px',
        border: "1px solid #000",
    },
    flex: {
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
const CardWeather = props => {

    const arrWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek)
            ? null : arrWeek[dayOfWeek];
    }
    const classes = useStyles();

    return (
        <Card className={classes.wrap}>
            <CardContent className={classes.flex}>
                <p>{getDayOfWeek(props.date)}</p>
                <span>{props.date}</span>
                <img src={props.img} alt="" />
                <p>{props.mintemp} °C - {props.maxtemp} °C </p>
            </CardContent>
        </Card>
    )
}

CardWeather.propTypes = {
    img: PropTypes.string,
}

export default CardWeather
