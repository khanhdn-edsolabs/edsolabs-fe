import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginBottom: '30px '
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <Typography variant="h3" component="h2" className={classes.title}>
            Edsolab 3-day Forecast
        </Typography>
    )
}

export default Header