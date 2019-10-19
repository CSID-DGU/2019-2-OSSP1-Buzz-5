import React, { Component } from 'react'
import coloredLogo from '../assets/color-logo.png';
import bridge from '../assets/bridge.png';
import slide from '../assets/slide-dots.png';
import lock from '../assets/lock.png';
import parallex from '../assets/parallex.png';
import comming from '../assets/comming.png';
import openIcon from '../assets/quotation-left.png';
import closeIcon from '../assets/quotation-right.png';
import background from '../assets/background.jpg';
import './css/Home.scss';


export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container content-page">
                    <div className="contents">
                        <img src={background} className="content-background"/>
                        {/* <img src={coloredLogo} className="content-logo"/>
                        <img src={bridge} className="content-bridge"/> */}
                        <div className="content-item text-medium">
                            <img src={slide} className="slide-icon"/>
                            <div>
                                Securely and Automatically sync your trades from popular exchanges such as:<br/>
                                Coinbase Pro, Binance, Bitfinex, Bittrex and more. More exchanges being added continuously.
                            </div>
                        </div>
                        <div className="content-item text-medium">
                            <img src={slide} className="slide-icon"/>
                            <div>
                                Analyze your portfolio risk and get insights into how you can maximize your returns.
                            </div>
                        </div>
                        <div className="content-item text-medium">
                            <img src={slide} className="slide-icon"/>
                            <div>
                                Execute trades on multiple exchanges using one easy-to-use interface.
                            </div>
                            <div className="text-thin">  
                                <i>(Coming soon)</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container item-page">
                    <div className="row">
                        <div className="feature-item col-md-3 col-12">
                            <img src={lock} className="feature-icon" />
                            <div className="text-medium">
                                Security
                            </div>
                            <div className="text-small">
                                State of the art security to safe gaurd all your data all the time
                            </div>
                        </div>
                        <div className="feature-item col-md-3 col-12">
                            <img src={parallex} className="feature-icon" />
                            <div className="text-medium">
                                Parallax Effect
                            </div>
                            <div className="text-small">
                                Intuitive user interface to make tracking and trading across multiple exchanges simple
                            </div>
                        </div>
                        <div className="feature-item col-md-6 col-12">
                            <img src={comming} className="feature-icon" />
                            <div className="text-medium">
                                Advanced Capabilities (comming soon)
                            </div>
                            <div className="text-small">
                                Personalized insights and recommendations to maximize your returns<br/><br/>
                                Excute rules-based trades across multiple exchanges from one place
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-page">
                    <div className="container">
                        <div className="testimonial-title text-extra-big">
                            Testimonials
                        </div>
                        <div className="row">
                            <div className="testimonial-item col-md-6">
                                <img src={openIcon} className="quotation-icon"/>
                                <div className="text-regular">
                                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                                </div>
                                <div className="footer-part">
                                    <div className="writer text-small">
                                        John Updike
                                    </div>
                                    <img src={closeIcon} className="quotation-icon"/>
                                </div>
                            </div>
                            <div className="testimonial-item col-md-6">
                                <img src={openIcon} className="quotation-icon"/>
                                <div className="text-regular">
                                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                                </div>
                                <div className="footer-part">
                                    <div className="writer text-small">
                                        John Updike
                                    </div>
                                    <img src={closeIcon} className="quotation-icon"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="testimonial-item col-md-6">
                                <img src={openIcon} className="quotation-icon"/>
                                <div className="text-regular">
                                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                                </div>
                                <div className="footer-part">
                                    <div className="writer text-small">
                                        John Updike
                                    </div>
                                    <img src={closeIcon} className="quotation-icon"/>
                                </div>
                            </div>
                            <div className="testimonial-item col-md-6">
                                <img src={openIcon} className="quotation-icon"/>
                                <div className="text-regular">
                                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                                </div>
                                <div className="footer-part">
                                    <div className="writer text-small">
                                        John Updike
                                    </div>
                                    <img src={closeIcon} className="quotation-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
