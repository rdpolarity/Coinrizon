import React from 'react'
import { Typography } from '@material-ui/core';

export default function Title(props) {
    return (
        <Typography variant="h3" gutterBottom style={{textAlign: "center", marginBottom: 50, color: "#424242"}}>
          {props.children}
        </Typography>
    )
}
