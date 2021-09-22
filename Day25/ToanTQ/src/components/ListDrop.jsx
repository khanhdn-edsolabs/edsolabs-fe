import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';

export default function ListDrop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTask = () => {
    console.log('delete');
  };

  const startTask = () => {
    console.log('start');
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreIcon />
      </Button>
      <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
        <MenuItem onClick={startTask}>stat</MenuItem>
        <MenuItem onClick={deleteTask}>delete</MenuItem>
      </Menu>
    </div>
  );
}
