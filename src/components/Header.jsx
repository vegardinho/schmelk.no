import {
  useTheme, AppBar, makeStyles,
} from '@material-ui/core';

import React from 'react';

import DesktopBar from './DesktopBar';
import MobileBar from './mobile/MobileBar';
import MobileMenu from './mobile/MobileMenu';

const useStyles = makeStyles({
  appbar: {
    color: ({ theme }) => theme.palette.secondary.light,
    boxShadow:
      '0px 2px 4px -1px rgb(143 41 1 / 20%), 0px 4px 5px 0px rgb(143 41 1 / 14%), 0px 1px 10px 0px rgb(143 41 1 / 12%)',
    zIndex: 'auto',
  },
});

function Header({ children, menuOpened, setMenuOpened }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  let menuPresent;

  return (
    <>
      <AppBar className={classes.appbar} color="secondary">
        <DesktopBar />
        <MobileBar
          menuPresent={menuPresent}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </AppBar>
      <>{children}</>
      <MobileMenu menuPresent={menuPresent} setMenuOpened={setMenuOpened} menuOpened={menuOpened} />
    </>
  );
}

export default Header;
