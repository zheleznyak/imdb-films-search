import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Navbar.styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.logo}>
            <NavLink to="/" className={classes.logoLink}>
              Imdb App
            </NavLink>
          </Typography>
          <ul className={classes.mainMenu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
