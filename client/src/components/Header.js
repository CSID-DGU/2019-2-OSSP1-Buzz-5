import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavDropdown, Button } from 'react-bootstrap'
import './css/Header.scss'
import logo from '../assets/logo_wxw.png';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="xl" sticky="top">
                <NavbarBrand href="/">
                    <img
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="WxW logo"
                    />
                </NavbarBrand>
                {/* <Navbar.Collapse id ="basic-navbar-nav"> */}
                <Nav className="mr-auto">
                    <Nav.Link className="Navbar-Font" href="/">Home</Nav.Link>
                    <Nav.Link className="Navbar-Font" href="/team">Team</Nav.Link>
                    <Nav.Link className="Navbar-Font" href="/courselist">Course</Nav.Link>
                    {/* <NavDropdown className="Navbar-Font" title="nav-dropdown">
                        <NavDropdown.Item href="#droplink_1">Accion1</NavDropdown.Item>
                        <NavDropdown.Item href="#droplink_2">Action2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#droplink_3">Action3</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Button className="mr-sm-2" variant="outline-primary" size="lg" href="/login" align="right">Login</Button>
                <Button variant="outline-primary" size="lg" href="signup">Signup</Button>
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}                         
export default Header