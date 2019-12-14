import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3)
  },
  logo: {
    //flexGrow: 1
  },
  mainMenu: {
    "& li": {
      listStyleType: "none"
    },
    "& a": {
      color: "#fff"
    }
  },
  logoLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.2em"
  }
}));
