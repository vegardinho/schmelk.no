import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      /*     display: "flex", */
    },

    list: {
      display: "flex",
      padding: "0",
    },

    appbar: {
      color: theme.palette.secondary.light,
    },

    activeItem: {
      background: "#f4f4f4",
    },

    toolbar: {
      padding: "0",
      alignItems: "unset",
    },
  };
});

const menuItems = [
  {
    text: "HJEM",
    path: "/",
  },
  {
    text: "SNARVEIER",
    path: "./snarveier",
  },
];

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Toolbar className={classes.toolbar}>
          <List className={classes.list}>
            {menuItems.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
