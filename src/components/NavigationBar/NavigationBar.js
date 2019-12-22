import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
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
                        {this.props.isUserLoggedIn && <li><Link className="NavLink" to="/github">Github</Link></li>}
                        {this.props.isUserLoggedIn &&<li><Link className="NavLink" to="/calendar">Google Calendar</Link></li>}
                    </Nav>
                    <Nav>
                        {!this.props.isUserLoggedIn && <li><Link className="NavLink" to="/signin">Sign In</Link></li>}
                        {!this.props.isUserLoggedIn && <li><Link className="NavLink" to="/signup">Sign Up</Link></li>}
                        {this.props.isUserLoggedIn && <Button onClick={this.props.onLogOut} size="lg" variant="warning" className="logoutButton">Logout</Button>}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar
