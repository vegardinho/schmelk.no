import {
  ListItem, ListItemText, Typography, Avatar, makeStyles,
} from '@material-ui/core';

import { useTheme } from '@material-ui/styles';
import React from 'react';
import { useLocation } from 'react-router';
import StyledLink from './StyledLink';

const useStyles = makeStyles({
  listItem: {
    width: 'fit-content',
    paddingTop: '1px',
    paddingBottom: '0',
    borderRadius: '20px',
    '-webkit-border-radius': '20px',
    '-moz-border-radius': '20px',

    paddingLeft: ({ theme, item }) => {
      if (item.icon) {
        theme.spacing(1);
      }
    },

    background: ({ item, location, theme }) => {
      if (item.path === location.pathname) {
        return theme.palette.secondary.light;
      }
      return theme.palette.secondary.main;
    },

    '&:hover': {
      background: ({ theme, item, location }) => {
        if (item.path !== location.pathname) {
          return theme.palette.secondary.main;
        }
        return theme.palette.secondary.light;
      },
    },

    '&:hover h6': {
      color: ({ theme, item, location }) => {
        if (item.path !== location.pathname) {
          return theme.palette.secondary.light;
        }
        return theme.palette.primary.dark;
      },
    },

    '& div div:nth-child(1)': {
      display: ({ item, location }) => {
        if (item.path === location.pathname) {
          return 'none';
        }
        return 'block';
      },
    },

    '& div div:nth-child(2)': {
      display: 'none',
    },

    '& div div:nth-child(3)': {
      display: ({ item, location }) => {
        if (item.path === location.pathname) {
          return 'block';
        }
        return 'none';
      },
    },

    '&:hover div div:nth-child(1)': {
      display: 'none',
    },

    '&:hover div div:nth-child(2)': {
      display: ({ item, location }) => {
        if (item.path === location.pathname) {
          return 'none';
        }
        return 'block';
      },
    },
  },

  text: {
    color: ({ theme, item, location }) => {
      if (item.path === location.pathname) {
        return theme.palette.primary.dark;
      }
      return theme.palette.primary.light;
    },

    lineHeight: 'unset',
  },
});

const MenuItem = ({ item }) => {
  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles({ theme, item, location });

  return (
    <StyledLink
      key={item.text}
      to={item.path}
      target={item.external ? '_blank' : null}
    >
      <ListItem className={classes.listItem} button key={item.text}>
        <div>
          {item.icon && <Avatar src={item.icon} alt="" />}
          {item.icon_hover && <Avatar src={item.icon_hover} alt="" />}
          {item.icon_dark && <Avatar src={item.icon_dark} />}
        </div>
        <ListItemText>
          <Typography variant="h6" className={classes.text}>
            {item.text}
          </Typography>
        </ListItemText>
      </ListItem>
    </StyledLink>
  );
};

export default MenuItem;
