import React from "react";
import { Grid, Typography, Icon } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';

String.prototype.capitalize = function() {
  return this.replace(/\b\w/g, l => l.toUpperCase());
};

const LIcon = makeStyles({
    root: {
        width: 50
    }
});

export default function FeatureBox(props) {
  const theme = useTheme();
  return (
    <Grid item sm={4} xs={12}>
      <Typography variant="h2">
        <Icon color="primary" fontSize="inherit">{props.icon}</Icon>  
      </Typography>
      <Typography variant="h4" gutterBottom>
        {props.title.capitalize()}
      </Typography>
      <Typography
        varient="overline"
        style={{ color: theme.palette.text.secondary }}
      >
        {props.children}
      </Typography>
    </Grid>
  );
}
