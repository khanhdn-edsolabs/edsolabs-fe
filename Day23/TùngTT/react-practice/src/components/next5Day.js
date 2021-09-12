import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width:'240px',
        height: '360px',
        background: 'rgba(0,0,0,0.1)'
    },
    text: {
        marginTop: '20px',
        textAlign: 'center',
        color: '#ffffff'
    },
    imageSet: {
        width:'100px',
        height:'100px'
    },
    h2Set: {
        marginBottom: '0'
    }
}));

export const NextDay = (getEle) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.text}>
                Next 3 day forecast
            </Typography>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={10}>
                    {[0,1].map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper}>
                            <h2 className={classes.h2Set}>{getEle.arrDay[value]}</h2>
                            <h2>{getEle.arrDate[value]}</h2>
                            <img className={classes.imageSet} src={getEle.arrIcon[value]} alt="icon"/>
                            <h2>{getEle.arrTemp[value]}°C</h2>
                        </Paper>
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}