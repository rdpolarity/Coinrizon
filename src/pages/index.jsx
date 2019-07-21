import React, { Component } from 'react'
import {Container, Grid} from "@material-ui/core"
import Splash from "./Home/Home"
import About from "./Home/About"
import Features from './Home/Features';
import Packages from './Home/Packages';
import "./index.css"
import Projects from './Home/Projects';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <section id="home">
                        <Splash/>
                    </section>
                    <Grid container direction="column" spacing={10}>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <section id="about">
                                <About/>
                            </section>
                        </Grid>
                        <Grid item>
                            <section id="features">
                                <Features/>
                            </section>
                        </Grid>
                        <Grid item>
                            <section id="packages">
                                <Packages/>
                            </section>
                        </Grid>
                        <Grid item>
                            <section id="projects">
                                <Projects/>
                            </section>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
