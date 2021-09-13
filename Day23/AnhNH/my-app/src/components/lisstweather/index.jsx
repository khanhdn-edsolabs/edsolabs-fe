import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TodayWeather from './todayWeather';
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
    span: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "red",
        padding: "5px",
        borderRadius: "0px 10px 0px 10px",
        color: "white"
    }

}));
export default function ListWeather(props) {
    const classes = useStyles();
    function getDayOfWeek(date) {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :week[dayOfWeek];
    }
    const ListWeather = props.dataListWeather?.map((item, index) => {
        return <TodayWeather key={index} day={getDayOfWeek(item.date)} date={item.date} avgtemp_c={item.day.avgtemp_c} img={item.day.condition.icon} />
    })
    const block = () => {
        if (props.dataListWeather === undefined || props.dataListWeather?.length === 0) {
            return "";
        }
        else {
            return (
                <Grid item container justifyContent="space-around">
                    <Grid item lg={12}>
                        <Typography variant="h6">
                            NHIỆT ĐỘ 5 NGÀY TIẾP THEO
                        </Typography>
                    </Grid>
                    {ListWeather}
                    <Grid item lg={2} xs={12} variant="outlined" className={classes.root} align="center">
                        <Typography variant="body2" >
                            ...
                        </Typography>
                        <Typography variant="body2" >
                            ...
                        </Typography>
                        <CardMedia image="https://s.memehay.com/files/posts/20200813/1e002fce17fc961ccc230780f9dfa0d4meo-den-cham-hieu-loading-mat-ngo-ngac.jpg" className={classes.img} />
                        <Typography variant="body2">
                            ...&deg;C
                        </Typography>
                        <span className={classes.span}>PRO</span>
                    </Grid>
                    <Grid item lg={2} xs={12} variant="outlined" className={classes.root} align="center">
                        <Typography variant="body2" >
                            ...
                        </Typography>
                        <Typography variant="body2" >
                            ...
                        </Typography>
                        <CardMedia image="https://s.memehay.com/files/posts/20200813/1e002fce17fc961ccc230780f9dfa0d4meo-den-cham-hieu-loading-mat-ngo-ngac.jpg" className={classes.img} />
                        <Typography variant="body2" >
                            ...&deg;C
                        </Typography>
                        <span className={classes.span}>PRO</span>
                    </Grid>
                </Grid>)
        }
    }
    return (
        <>
            {block()}
        </>
    )
}
