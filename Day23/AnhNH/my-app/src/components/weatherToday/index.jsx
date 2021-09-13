import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    img: {
        width: "100px",
        height: "100px",
        marginRight: '10px',
        borderBottom: "1px solid red"

    },
    content: {
        flex: 1
    },
    boder: {
        border: "1px solid black",
        borderRadius: "10px"
    },
    flex: {
        display: "flex"
    }
}));

function WeatherToday(props) {
    const classes = useStyles();
    const block = () => {
        if (Object.keys(props.dataToday).length === 0) {
            return (<></>);
        }
        else {
            return (
                    <Grid container item lg={6} xs={12} className={classes.boder}>
                        <Grid item lg={12}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Today Weather {props.dataToday.location?.name},{props.dataToday.location?.country}
                            </Typography>
                        </Grid>
                        <Grid container item lg={12} className={classes.flex}>
                            <Grid item className={classes.root} container>
                                <Grid item>
                                    <CardMedia image={props.dataToday.current?.condition?.icon} className={classes.img} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" >
                                        {props.dataToday.current?.condition?.text}
                                    </Typography>
                                    <Typography variant="h5" >
                                        {props.dataToday.current?.temp_c}&deg; C
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.content}>
                                <Typography variant="body2" >
                                    Wind: {props.dataToday.current?.wind_kph} kmpb
                                </Typography>
                                <Typography variant="body2" >
                                    precip: {props.dataToday.current?.precip_mm} mm
                                </Typography>
                                <Typography variant="body2" >
                                    pressure: {props.dataToday.current?.pressure_mb} mb
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid >
            )
        }
    }
    return (
        <>
            {block()}
        </>
    )
}

export default WeatherToday;
