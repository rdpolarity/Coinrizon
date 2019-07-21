import React, { Component } from "react";
import { Link } from "react-scroll";
import { Link as Nlink, NavLink } from "react-router-dom";
import {
  Button,
  Grid,
} from "@material-ui/core";
// import { useTheme } from '@material-ui/styles';



export default function NavButton(props) {
    return (
        <Grid item>
          
            <Link
              offset={-70}
              spy={true}
              activeClass="active"
              className={props.name}
              to={props.name}
            >
                <Nlink to={props.to} style={{textDecoration: "none", color: "inherit"}}>
                    <Button variant={props.variant} color="inherit">{props.name}</Button>
                </Nlink>    
            </Link>
        </Grid>
    );
}

NavButton.defaultProps = {
    to: "/"
}
