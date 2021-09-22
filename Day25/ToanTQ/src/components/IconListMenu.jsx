import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TimerIcon from '@material-ui/icons/Timer';

export default function IconListMenu(icons) {
  const test = icons;
  let component;

  switch (test.icon.props.title) {
    case 'Timer':
      component = <TimerIcon />;
      break;
    case 'Report':
      component = <AssessmentIcon />;
      break;
    case 'Logout':
      component = <ExitToAppIcon />;
      break;
    default:
      component = <AccountCircleIcon />;
  }
  return component;
}
