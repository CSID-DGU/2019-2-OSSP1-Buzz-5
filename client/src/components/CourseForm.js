import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import logo from '../assets/logo_wxw.png';
import { Navbar, NavbarBrand, Nav, Badge, Button } from 'react-bootstrap'
import './css/Header.scss'
import "./css/Course.scss"
import './css/Footer.scss';

export class CourseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      course_name : null,
      tutor: null,
      description : null,
      language : null,
      date : null,
      course_password: null,

      formErrors : {
        course_name : "",
        description : "",
        password: "",
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("handleSubmit 버튼 누르면 나타나는 로그")
    // DB에 저장하는 부분
    this.routeChange()
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case "course_name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "description":
        formErrors.description =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 3 ? "minimum 3 characters required" : "";
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  }

  routeChange = () => {
    this.props.history.push({
      pathname: '/courselist',
      state: {
        course_name: this.state.course_name,
        tutor: window.sessionStorage.getItem('name'),
        description: this.state.description,
        language: this.state.language,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        course_password: this.state.password,
        // course_password: 
      }
    })
  }

  getParsedDate = () => {

  }

  render() {
    const { formErrors } = this.state;
    const auth = this.props.auth;
    return (
      <div>
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
        </Navbar>

        <div className="row-fluid">
          <div className="wrapper">
            <h1>Create Course Room</h1>
            <hr/>
            <div className="form_wrapper">
              <form method="post" action="" noValidate onSubmit={this.handleSubmit}>
                <div className="course_name">
                  <label>Course Name</label>
                  <input
                      className={formErrors.course_name.length > 0 ? "error" : null}
                      placeholder="Course Name"
                      name="course_name"
                      noValidate
                      onChange={this.handleChange}
                    />
                </div>

                <div className="description">
                  <label>Course Description</label>
                  <input
                      className={formErrors.description.length > 0 ? "error" : null}
                      placeholder="Brief Course Description"
                      name="description"
                      noValidate
                      onChange={this.handleChange}
                    />
                </div>

                <div className="language">
                  <label>Course Language</label>
                  <select noValidate onChange={this.handleChange} name="language">
                    <option value="JavaScript" selected="selected">JavaScript</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="Objective-C">Objective-C</option>
                    <option value="Python">Python</option>
                    <option value="Go">Go</option>
                    <option value="Kotlin">Kotlin</option>
                    <option value="Swift">Swift</option>
                  </select>
                </div>

                <div className="password">
                  <label>Course ID</label>
                  <input
                      className={formErrors.password.length > 0 ? "error" : null}
                      placeholder="Input Course Room ID"
                      type="password"
                      name="password"
                      noValidate
                      onChange={this.handleChange}
                    />
                </div>

                <button type="submit" onSubmit={this.handleSubmit}>Create Course</button>
              </form>
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

export default withRouter(CourseForm)
