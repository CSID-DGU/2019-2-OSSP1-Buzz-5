import React, { Component } from 'react';
import logo from '../assets/logo_wxw.png';
import './css/Footer.scss';

export default class Footer extends Component {
  scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  render() {
    const auth = this.props.authenticated
    return (
      <div className="footer-page" >
        <div className="container">
            <div className="upper-part">
                <img src={logo} className="footer-logo" />
                <div className="row text-regular">
                    <div className="menu-item">
                        <a href="/team">Team</a>
                    </div>
                    <div className="menu-item" onClick={()=>this.props.Logout}>
                        {auth ? (<a href="/">Logout</a>) : (<a href="/login">Login</a>)}
                    </div>
                    <div className="menu-item">
                        <a href="/signup">Signup</a>
                    </div>
                </div>
            </div>
            <div className="footer-part text-smaller">
                Copyright 2019 (c) Dongguk Univ. CSE-OSSP1-Team-Buzz
            </div>
        </div>
      </div>
    )
  }
}
