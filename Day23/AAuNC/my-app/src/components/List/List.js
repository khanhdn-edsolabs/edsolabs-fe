import './List.css';
import { Grid, Paper, Typography, CardMedia } from "@material-ui/core";

export default function List(props) {
    const { threeDay } = props;
    
    return (
        <>
            <Grid container justifyContent="space-between" spacing={4} className="list">
                <Grid component="h3" item container>Next 3 day forecast</Grid>
                {threeDay.map((day, index) => {
                    const date = new Date(day.date);
                    return (
                        <Grid key={index} item xs={3} >
                            <Paper className="day-item">
                                <Typography component="p">
                                    {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)}</Typography>
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
