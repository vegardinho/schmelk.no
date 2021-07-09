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

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      width: "67vw",
      margin: "auto",
      display: "block",
      paddingBottom: theme.spacing(8),
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

    menu: {
      display: "flex",
      justifyContent: "space-around",
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

  return (
    <Container className={classes.container} maxWidth="md">
      <Link to="/">
        <img src={logo} className={classes.logo} alt="logo" />
      </Link>
      <Container className={classes.menu}>
        {menuItems.map((item) => (
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            key={item.text}
            endIcon={<ArrowForwardIosIcon color="primary" />}
          >
            <Typography color="primary">{item.text}</Typography>
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default FrontPage;
