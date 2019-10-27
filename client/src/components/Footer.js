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
    return (
      <div className="footer-page">
        <div className="container">
            <div className="upper-part">
                <img src={logo} className="footer-logo" />
                <div className="row text-regular">
                    <div className="menu-item">
                        <a href="#">About</a>
                    </div>
                    <div className="menu-item">
                        <a href="#">Login</a>
                    </div>
                    <div className="menu-item">
                        <a href="#">Signup</a>
                    </div>
                </div>
            </div>
            <div className="footer-part text-smaller">
                Copyright 2019 (c) Dongguk University, CSE-OSSP-1-Team-Buzz
            </div>
        </div>
        <div className="scrollToTop" onClick={()=>this.scrollTop()}>
            <i className="fa fa-angle-up arrow-up-icon"></i>
        </div>
      </div>
    )
  }
}
