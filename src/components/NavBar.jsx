import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import logo from "../images/logo.png"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  useScrollTrigger,
  Grid
} from "@material-ui/core";

import "../pages/index.css"
import NavButton from "./NavButton";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
    color: trigger ? "default" : "primary"
  });
}

const style = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: 10
  }
}));


export default function NavBar(props) {
  const classes = style();
  return (
    <div>
      <ElevationScroll>
        <AppBar style={{transitionProperty: "all"}}>
          <Container>
            <Toolbar>
              <img src={logo} alt="logo" style={{width: 30}}/>
              <Typography variant="overline" className={classes.title}>
                Coin<strong>rizon</strong>
              </Typography>
              <Grid container spacing={1} alignItems="center" justify="flex-end">
                <NavButton name="home"/>
                <NavButton name="about"/>
                <NavButton name="features"/>
                <NavButton name="packages"/>
                <NavButton name="projects"/>
                <NavButton name="team" to="team"/>
                <NavButton name="contact" to="contact" variant="outlined"/>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
