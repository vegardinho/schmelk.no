import {
  List, makeStyles, Toolbar, useTheme,
} from '@material-ui/core';
import React from 'react';
import menuItems from '../content/menuItems';
import TopMenuButton from './simple/TopMenuButton';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    padding: '0',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    zIndex: 'auto',

  },

  toolbar: ({ theme }) => ({
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  }),
});

const DesktopBar = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Toolbar className={classes.toolbar}>
      <List className={classes.list}>
        {menuItems.map((item) => (
          <TopMenuButton key={item.text} item={item} />
        ))}
      </List>
    </Toolbar>
  );
};

export default DesktopBar;
