import React, { Component } from 'react'
import { Typography, Container, Grid } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Grid style={{height: 200}} container alignItems="center">
                        <Grid item>
                            <Typography style={{color: "white"}}>Copyrights 2019 © All Rights Reserved COINRIZON</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
