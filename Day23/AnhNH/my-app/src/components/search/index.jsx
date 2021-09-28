import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Datasearch from './datasearch';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    input: {
        flex: 1
    }
}));
export default function Search(props) {
    const classes = useStyles();
    const onchange = (e) => {
        props.handleValueSearch(e.target.value)
    }
    return (
        <Grid item lg={7} xs={12}>
            <Paper variant="outlined" className={classes.root}>
                <IconButton aria-label="search" onClick={props.onclickTakeApi}>
                    <SearchIcon />
                </IconButton>
                <InputBase placeholder="Search weather today" className={classes.input} onChange={onchange} onBlur={props.onclickTakeApi} onFocus={props.onFocus} onKeyUp={props.onkeyUp}/>
            </Paper>
            {props.trangThaiBlockDataSeach ? <Datasearch dataShowSelect={props.dataSearchCity} onclickDataToday={props.onclickDataToday} setloading={props.setloading}/>:""}
        </Grid>
    )
}
