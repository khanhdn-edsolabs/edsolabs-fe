import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "10px",
        border: "1px solid black",
        padding: "10px",
        marginTop: '20px',
        position: "relative"
    },
    img: {
        width: "auto",
        height: '200px',
    },
    span:{
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:"#2ad527",
        padding:"5px",
        borderRadius:"0px 10px 0px 10px",
        color:"white"
    }
}));
function TodayWeather(props) {
    const classes = useStyles();
    return (
        <Grid item lg={2} xs={12} variant="outlined" className={classes.root} align="center">
            <Typography variant="body2">
                {props.day}
            </Typography>
            <Typography variant="body2" >
                {props.date}
            </Typography>
            <CardMedia image={props.img} className={classes.img} />
            <Typography  variant="body2">
            {props.avgtemp_c}&deg;C
            </Typography>
            <span className={classes.span}>FREE</span>
        </Grid>
    )
}

export default TodayWeather;
