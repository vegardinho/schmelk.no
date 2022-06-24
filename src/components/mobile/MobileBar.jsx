import {
  Avatar, Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import './hamburger.css';

import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import bottle from '../../img/favicon_pm.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    color: theme.palette.primary.light,
  },

  avatar: {
    margin: 'auto',
  },

  toolbar: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

}));

const MobileBar = ({ menuOpened, setMenuOpened, menuPresent }) => {
  const classes = useStyles();

  const handleClick = async () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = 'hidden';
    }
  }, [menuOpened]);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Burger
          direction="left"
          type="button"
          isOpen={menuOpened}
          onClick={handleClick}
        />
        <Link className={classes.avatar} to="/">
          <Avatar src={bottle} alt="" />
        </Link>

      </Toolbar>
    </>
  );
};

export default MobileBar;
