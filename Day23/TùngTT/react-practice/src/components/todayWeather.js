import React from 'react';
import { makeStyles } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: '20px',
        width: '100%',
    },
    paper: {
        border: '1px solid rgb(158 210 234 / 20%)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '40px',
        boxShadow: '0px 12px 17px 0px #656290'
    },
    location: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '500',
        marginTop: '30px'
    },
    grid: {
        position: 'relative'
    },
    gridCenter:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    inforLi: {
        listStyleType: 'none',
        padding: '20px 0',
        fontSize: '18px',
        height: '33.33%',
        width: '100%'
    },
    stateDiv: {
        paddingLeft: '15px'
    },
    h2: {
        margin:'0',
        fontSize: '34px'
    },
    imageState:{
        width: '100px',
        height: '100px'
    }
}));
export const TodayWeather = (getEle) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.paper}>
                <Typography variant="h4" className={classes.location}>
                    Today's Weather in {getEle.name}, {getEle.country}
                </Typography>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8} className={classes.grid}>
                        <div className={classes.gridCenter}>
                            <img className={classes.imageState} src={getEle.image} alt="icon"/>
                            <div className={classes.stateDiv}>
                                <p>
                                    {getEle.states}
                                </p>
                                <h3 className={classes.h2}>
                                    {getEle.temp_c}°C
                                </h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <ul>
                            <li className={classes.inforLi}>
                                Wind: {getEle.wind} mph | {getEle.wind2} kph
                            </li>
                            <li className={classes.inforLi}>
                                Precip: {getEle.precip} mm
                            </li>
                            <li className={classes.inforLi}>
                                Presure: {getEle.presure} mb
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
