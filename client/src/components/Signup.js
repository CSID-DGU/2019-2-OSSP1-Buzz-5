import React, { Component } from "react";
import logo from '../assets/logo_wxw.png';
import './css/Footer.scss';
import "./css/Account.scss";

//가입회원 db추가 부분
// const express = require('express');
// const router = express.Router();
// const db = require('../Server/module/pool.js');
// const PORT = process.env.PORT || 3000;

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/    // 이메일 정규 표현식 [아이디]@[###.###]
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      password: null,
      formErrors: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    
    if (formValid(this.state)) {
      console.log(`                              
        —SUBMITTING—
        Name : ${this.state.name}
        Email : ${this.state.email}
        Password : ${this.state.password}
      `);

      //db에 유저 정보 추가 부분 
     /* router.post('/', async(req, res, next) => {
      //   try{
      //     let insertUserQuery = 'insert into innodb.User(UserName, Email, Password)  values (?,?,?)';
      //     let insertResult = await db.queryParamCnt_Arr(insertUserQuery,[this.state.name, this.state.email, this.state.password]);
  
      //     if(!insertResult){
      //       console.log("Insert Error");
      //       return next(500);
      //     }
  
          res.status(201).send({
            "message" : "insert new user success"
          });
        } catch(err){
          return next(err);
        }
      });*/

      //module.exports = router;
      
    } 
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    const auth = this.props.authenticated;
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} method="post" noValidate>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  className={formErrors.name.length > 0 ? "error" : null}
                  placeholder="Name"
                  type="name"
                  name="name"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.name.length > 0 && (
                  <span className="errorMessage">{formErrors.name}</span>
                )}
              </div>
              
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <div>
                  <small>
                    <a href="/login">Already Have an account?</a>
                  </small>
                </div>
              </div>
            </form>
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
    );
  }
}

export default Signup;