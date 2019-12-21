import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

import './NavigationBar-styles.css';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>SPA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <li><Link className="NavLink" to="/github">Github</Link></li>
                    <li><Link className="NavLink" to="/calendar">Google Calendar</Link></li>
                    </Nav>
                    <Nav>
                    <li><Link className="NavLink" to="/signin">Sign In</Link></li>
                    <li><Link className="NavLink" to="/signup">Sign Up</Link></li>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar
