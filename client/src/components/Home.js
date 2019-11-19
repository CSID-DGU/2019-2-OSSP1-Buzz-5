import React, { Component } from 'react'
import logo from '../assets/logo_wxw.png';
import slide from '../assets/slide-dots.png';
import lock from '../assets/lock.png';
import parallex from '../assets/parallex.png';
import comming from '../assets/comming.png';
import openIcon from '../assets/quotation-left.png';
import closeIcon from '../assets/quotation-right.png';
import background from '../assets/background.jpg';
import './css/Footer.scss';
import './css/Home.scss';


export class Home extends Component {
    render() {
        const auth = this.props.authenticated
        return (
            <div>
                <div className="container content-page">
                    <div className="contents">
                        <img src={background} weight="400" height = "500" className="content-background"/>
                        {/* <img src={coloredLogo} className="content-logo"/>
                        <img src={bridge} className="content-bridge"/> */}
                        <div className="content-item text-medium">
                            <img src={slide} className="slide-icon"/>
                            <div>
                                실시간 화면 공유를 통한 인터넷 강의 서비스<br/><br/>
                                공간적 제약 없이 공유하는 지식, Wisdom X Wisdom
                            </div>
                        </div>
                        {/* <div className="content-item text-medium">
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
                        </div> */}
                    </div>
                </div>

                <div className="container item-page">
                    <div className="row">
                        <div className="feature-item col-md-4 col-12">
                            <img src={lock} className="feature-icon" />
                            <div className="text-medium">
                                Screen Sharing
                            </div>
                            <div className="text-small">
                                화면 공유를 통한 자유로운 질의응답 및 소통
                            </div>
                        </div>
                        <div className="feature-item col-md-4 col-12">
                            <img src={parallex} className="feature-icon" />
                            <div className="text-medium">
                                File Sharing
                            </div>
                            <div className="text-small">
                                공간적 제약을 벗어난 공통 자료 공유
                            </div>
                        </div>
                        <div className="feature-item col-md-4 col-12">
                            <img src={comming} className="feature-icon" />
                            <div className="text-medium">
                                Chatting
                            </div>
                            <div className="text-small">
                                음성 대화가 힘든 상황을 위한 실시간 채팅
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        )
    }
}

export default Home
