import React, { Component, PropTypes } from "react";
import {withRouter, Redirect, Link} from 'react-router-dom';
import { signIn } from '../auth/Auth'
import "./css/Account.scss";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/    // 이메일 정규 표현식 [아이디]@[###.###]
);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 여기서 함수를 넣어보기
  handleSubmit = e => {
    e.preventDefault();
    //let login = this.props.login;
    const { email, password } = this.state;
    try{
      const user = signIn(email, password)
      if(user) {
        window.sessionStorage.setItem('email', email)
        window.sessionStorage.setItem('password', password)
        this.props.history.push("/")
      }
        // (<Link to="/" />)
        // this.props.history.push("/")
    } catch (e) {
      alert("Failed to Login")
      this.setState({
        email: "",
        password: ""
      })
    }
    // const user = signIn(email, password)
    // if(user) {
    //   window.sessionStorage.setItem('email', email)
    //   window.sessionStorage.setItem('password', password)
    //   (<Redirect to="/" />)
    // } else {
    //   alert("Failed to Login")
    //   this.setState({
    //     email: null,
    //     password: null
    //   })
    // }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
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
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} method="post" noValidate>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
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
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
              <div>
                <small>
                  Don't have an Account Yet?
                  <a href="/signup"> Sign up</a>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;