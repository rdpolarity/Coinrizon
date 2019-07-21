import React from 'react'
import { Grid } from '@material-ui/core';
import Counter from 'components/Counter';

export default function Satistics() {
    return (
            <Grid container spacing={3} justify="space-evenly" style={{margin: 25}}>
                <Counter title="team members" count="20" suffix="+"/>
                <Counter title="countries" count="10" suffix="+"/>
                <Counter title="clients" count="30" suffix="+"/>
                <Counter title="public sales" count="150" suffix="M+"/>
            </Grid>
    )
}
