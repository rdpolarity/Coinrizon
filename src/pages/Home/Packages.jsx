import React from "react";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";

const Title = {
  marginBottom: 10
};

export default function Packages() {
  return (
    <div>
      <Paper elevation="10" className="Paper">
        <Typography style={Title} variant="h4">
          Packages
        </Typography>
        <Typography varient="p">
          Dolore sit esse irure adipisicing magna irure excepteur occaecat.
          Nulla consectetur esse do eiusmod laborum irure. Est incididunt
          excepteur reprehenderit deserunt mollit. Magna anim minim occaecat
          ipsum et ullamco ut laboris adipisicing pariatur. Ut duis velit veniam
          minim elit laboris ut incididunt. Quis minim ullamco et proident
          officia enim elit elit veniam officia reprehenderit do ut cillum.
        </Typography>
      </Paper>
    </div>
  );
}
