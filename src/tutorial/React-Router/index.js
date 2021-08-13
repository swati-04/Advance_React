import React from 'react'
import About from './About'
import Home from './Home'
import Error from './Error'
import NavBar from './NavBar'
import People from './People'
import Person from './Person'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function ReactRouterDom() {
    return (
        <Router>
            React Router
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/error">
                <Error/>
            </Route>
            <Route path="/people">
                <People/>
            </Route>
            <Route path="/person">
                <Person/>
            </Route>
            <Route path="/Navbar">
                <NavBar/>
            </Route>
        </Router>
    )
}

export default ReactRouterDom
