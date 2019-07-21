import React from 'react'
import { Typography } from '@material-ui/core';

export default function PaperFooter(props) {
    return (
        <div style={{margin: "50px -50px -50px -50px", backgroundColor: "#ECEFF1", height: 200}}>
            <Typography varient="h3">{props.title}</Typography>
        </div>
    )
}
