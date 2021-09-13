import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({

    list: {
        position: 'absolute',
        top: '100%',
        left: '0',
        padding: '2px 4px 2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#ffc',
        overflow: 'auto',
        maxHeight: 200,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

export default function PinnedSubheaderList(props) {
    const classes = useStyles();
    const mapData = props.dataSearch.map((item, index) => {
        return (<ListItem key={index}
            onClick={() => {
                props.handleClickList(item.url);
            }}
        >

            <ListItemText
            >{item.name}
            </ListItemText>
        </ListItem>)
    })
    return (
        <List className={classes.list} subheader={<li />}>
            <li className={classes.listSection}>
                <ul className={classes.ul}>
                    {
                        mapData
                    }
                </ul>
            </li>
        </List>
    );
}