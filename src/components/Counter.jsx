import React, {useState} from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter(props) {
  const theme = useTheme();

  function onEnter() {
    console.log("entered!")
  }
 
  return (
    <div>
      <Grid item style={{ textAlign: "center" }}>
        <Typography variant="h4">
        <ScrollTrigger onEnter={onEnter()}>
            <CountUp end={props.count} duration={5} delay={0}/>
            <span style={{ color: theme.palette.secondary.main }}>
                {props.suffix}
            </span>
        </ScrollTrigger>
        </Typography>
        <Typography
          varient="overline"
          style={{ color: theme.palette.text.secondary }}
        >
          {props.title.toUpperCase()}
        </Typography>
      </Grid>
    </div>
  );
}
