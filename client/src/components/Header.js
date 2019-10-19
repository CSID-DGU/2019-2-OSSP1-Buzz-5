import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavDropdown, Button } from 'react-bootstrap'
import './css/Header.scss'
import logo from '../assets/logo_wxw.png';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="xl" sticky="top">
                <NavbarBrand href="#">
                    <img
                        src={logo}
                        width="150"
                        height="150"
                        className="d-inline-block align-top"
                        alt="WxW logo"
                    />
                </NavbarBrand>
                <Navbar.Collapse id ="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="Navbar-Font" href="#">Home</Nav.Link>
                        <Nav.Link className="Navbar-Font" href="#">About</Nav.Link>
                        <NavDropdown className="Navbar-Font" title="nav-dropdown">
                            <NavDropdown.Item href="#droplink_1">Accion1</NavDropdown.Item>
                            <NavDropdown.Item href="#droplink_2">Action2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#droplink_3">Action3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button className="mr-sm-2" variant="outline-primary" size="lg" href="#" align="right">Login</Button>
                    <Button variant="outline-primary" size="lg" href="#">Signup</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}                         
export default Header

// import React, { Component } from 'react';
// import logo from '../assets/logo_wxw.png';
// import './css/Header.scss';

// export default class Header extends Component {
//   scrollToBottom() {
//     window.scroll({
//       top: 1000,
//       behavior: "smooth"
//     });
//   }

//   render() {
//     return (
//       <div className="banner-page">
//        <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-no header-page text-medium ">
//             <a className="navbar-brand text-normal" href="/">
//               <img src={logo} className="logo-icon"/>
//             </a>
//             <button className="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#myNavbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse justify-content-end text-right" id="myNavbar">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <a href="/skilled" className="nav-link nav-active">Features</a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link">Login</a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link">Signup</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         <div className="banner-text col-lg-6 col-md-12 col-12">
//           <div className="banner-title text-biggest ">
//             Track and and analyze your cryptocurrency trades automatically.
//           </div>
//           <div className="banner-content text-regular">
//             <br/>Get insights on how you can maximize your returns. <br/><br/>
//             Coming soon: Trade on multiple cryptocurrency exchanges from one sigle location
//           </div>
//           <div className="banner-signup-btn text-bigger">
//             Sign up Now!
//           </div>
//         </div> 
//         <div className="scroll-area">
//           <div className="scorllToBottom" onClick={()=>this.scrollToBottom()}>
//             <i className="fa fa-angle-down arrow-down-icon"></i>
//           </div>        
//         </div>
//        </div>
//       </div>
//     )
//   }
// }