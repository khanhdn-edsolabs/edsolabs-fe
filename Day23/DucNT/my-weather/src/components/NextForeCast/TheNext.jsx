import './forecast.scss';
import { Grid, Paper, Typography, CardMedia } from "@material-ui/core";

export default function TheNext(prop) {
    const { threeDay } = prop;
    function getWeekday(day) {
        switch (day) {
            case 0:
                return 'Sun';
                break;
            case 1:
                return 'Mon';
                break;
            case 2:
                return 'Tue';
                break;
            case 3:
                return 'Wed';
                break;
            case 4:
                return 'Thu';
                break;
            case 5:
                return 'Fri';
                break;
            case 6:
                return 'Sat';
                break;

        }
    };

    return (
        <>
            <Grid container justifyContent="space-between" spacing={4} className="list">
                <Grid component="h3" item container>Next 3 day forecast</Grid>
                {threeDay.map((day, index) => {
                    const date = new Date(day.date);
                    return (
                        <Grid key={index} item xs={3} >
                            <Paper className="day-item">
                                <Typography component="p">{getWeekday(date.getDay())}</Typography>
                                <Typography component="p">{date.getDate()}/{date.getMonth() + 1}</Typography>
                                <CardMedia
                                    component="img"
                                    alt={day.day.condition.text}
                                    height="100px"
                                    image={day.day.condition.icon}
                                    title={day.day.condition.text}
                                    className="detail-image" />
                                <Typography component="p">{day.day.avgtemp_c} &deg;C</Typography>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}