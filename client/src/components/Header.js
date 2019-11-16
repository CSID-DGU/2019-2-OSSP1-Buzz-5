import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, Badge, Button } from 'react-bootstrap'
import './css/Header.scss'
import logo from '../assets/logo_wxw.png';

export class Header extends Component {
    render() {
        const auth = this.props.authenticated
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
                </Nav>
                {auth ? (
                    <Badge className="mr-sm-2" variant="primary">{this.props.userName}</Badge>
                ): (
                    <Button className="mr-sm-2" variant="outline-primary" size="sm" href="signup">Signup</Button>
                )}

                {auth ? (
                    <Button className="mr-sm-2" variant="outline-primary" size="sm" href="/" align="right" onClick={this.props.Logout}>Logout</Button>
                ): (
                    <Button className="mr-sm-2" variant="outline-primary" size="sm" href="/login" align="right">Login</Button>
                )}
                
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}                         
export default Header