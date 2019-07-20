
import { Link, LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link as Nlink, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useScrollTrigger,
  Grid
} from "@material-ui/core";

import React, { Component } from "react";

export default class NavButton extends Component {
  render() {
    return (
        <Grid item>
          <Nlink to={this.props.to} style={{ textDecoration: "none" }}>
            <Link
              offset={-70}
              spy={true}
              activeClass="active"
              className={this.props.name}
              to={this.props.name}
            >
              <Button variant={this.props.variant} color="inherit">{this.props.name}</Button>
            </Link>
          </Nlink>
        </Grid>
    );
  }
}
