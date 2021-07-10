import { ListItem, ListItemText } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useLocation } from "react-router";

const useStyles = makeStyles({
  listItem: {
    padding: ({ theme }) => {
      return `0 ${theme.spacing(6)}px`;
    },

    background: ({ item, location }) => {
      if (item.path === location.pathname) {
        return "#fefefe";
      }
      return "#000000";
    },
  },
});

const MenuItem = ({ item }) => {
  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles({ theme, item, location });

  return (
    <ListItem className={classes.listItem} button key={item.text}>
      <ListItemText
        primaryTypographyProps={{ color: "primary" }}
        primary={item.text}
      />
    </ListItem>
  );
};

export default MenuItem;
