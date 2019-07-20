import React, { Component } from 'react'
import {Container} from "@material-ui/core"
import Splash from "./Home/Splash"
import About from "./Home/About"
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Splash/>
                    <About/>
                </Container>
            </div>
        )
    }
}
