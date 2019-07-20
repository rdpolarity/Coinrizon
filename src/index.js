import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

// Global Components
import NavBar from "components/NavBar"

// Core Pages
import Home from "pages/Home"
import Team from "pages/Team"
import Contact from "pages/Contact"

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#2196f3',
        dark: '#000'
     },
     secondary: {
       main: '#f44336',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

document.body.style = `background: ${theme.palette.primary.main}`;

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <MuiThemeProvider theme = { theme }>
    <NavBar/>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
