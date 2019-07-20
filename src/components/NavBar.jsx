import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import logo from "../images/logo.png"
// import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useScrollTrigger
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
    color: trigger ? "white" : "primary"
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
  },
  logo: {
    width: 30
  }
}));

export default function NavBar(props) {
  const classes = style();
  return (
    <div>
      <ElevationScroll>
        <AppBar style={{transitionProperty: "color"}}>
          <Container>
            <Toolbar>
              <img src={logo} alt="logo" className={classes.logo}/>
              <Typography variant="overline" className={classes.title}>
                Coin<strong>rizon</strong>
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Packages</Button>
              <Button color="inherit">Our Projects</Button>
              <Button color="inherit">Team</Button>
              <Button color="primary">Contact</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
