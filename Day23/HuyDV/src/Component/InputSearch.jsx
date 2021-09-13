import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListDataSearch from './ListDataSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        borderRadius: '30px',
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        paddingRight: '15px'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase(props) {

    const handleValueChange = (e) => {
        props.handleValueChange(e.target.value);
    }
    const handleClickList = (value) => {
        props.handleClickList(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const classes = useStyles();

    return (
        <>
            <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    type="search"
                    placeholder="Nhập và thành phố bạn muốn xem"
                    inputProps={{ 'aria-label': 'search city' }}
                    onChange={handleValueChange}
                    value={props.valueInput}
                />
                {
                    props.trangThaiBlockDataSeach ? <ListDataSearch
                        classes={classes.list}
                        dataSearch={props.dataSearch}
                        handleClickList={handleClickList}
                    /> : ''
                }
            </Paper>
        </>
    );
}
