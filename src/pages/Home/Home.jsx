import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function Splash() {
  return (
    <div>
      <Grid container style={{height: 600,color: 'white'}} alignItems="center" >
        <Grid item xs={6}>
          <Typography variant="h3" component="p" gutterBottom>Get noticed.<br/>Build a following.<br/>Grow your business.</Typography>
          <Typography varient="p">
            Coinrizon, a blockchain-focused marketing agency consisting of
            multidisciplinary industry veterans, is focused on personal
            connections and nurturing community growth through influencers and
            interpersonal engagement
          </Typography>
          <Button style={{margin: 10}} variant="contained" color="secondary">Packages</Button>
          <Button variant="outlined" color="secondary">Quote</Button>  
        </Grid>
      </Grid>
    </div>
  )
}
