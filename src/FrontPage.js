import logo from "./img/schmelk_logo.png";
import bottle from "./img/bottle.png";
import {
  Button,
  Container,
  Icon,
  List,
  ListItem,
  makeStyles,
  SvgIcon,
  Typography,
  Link,
} from "@material-ui/core";
import LocalDrinkRoundedIcon from "@material-ui/icons/LocalDrinkRounded";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Masonry from "react-masonry-css";
import "./masonry.css";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      width: "min(53vh, 85vw)",
      margin: "auto",
      display: "block",
      paddingBottom: `min(10vw, ${theme.spacing(6)}px)`
    },

    container: {
      marginTop: "21vh",
    },

    item: {
      /* display: "flex",
      justifyContent: "space-around", */
      /*       padding: `0 ${theme.spacing(3)}`, */
      /*       padding: theme.spacing(3), */
    },

    button: {
      margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    },

    menu: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: 'wrap'
    },
  };
});

const menuItems = [
  {
    text: "Gi meg schmelk",
    /*     icon: <SubjectOutlined color="secondary" />, */
    path: "/",
  },
  {
    text: "Guds ord",
    /*     icon: <AddCircleOutlined color="secondary" />, */
    path: "/create",
  },
  {
    text: "Snarveier",
  },
];



const FrontPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const themeBreaks = theme.breakpoints.values;

  const breakpoints = {
    default: 3,
    [themeBreaks.md]: 2,
    [themeBreaks.sm]: 1
  }

  return (
    <Container className={classes.container} maxWidth="md">
      <Link to="/">
        <img src={logo} className={classes.logo} alt="logo" />
      </Link>
      <Container className={classes.menu}>
{/*         <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        > */}
          {menuItems.map((item) => (
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
              color="secondary"
              key={item.text}
              endIcon={<ArrowForwardIosIcon color="primary" />}
            >
              <Typography color="primary">{item.text}</Typography>
            </Button>
          ))}
{/*         </Masonry> */}
      </Container>
    </Container>
  );
};

export default FrontPage;
