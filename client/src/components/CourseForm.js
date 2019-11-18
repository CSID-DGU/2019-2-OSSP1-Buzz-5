import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import "./css/Course.scss"

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
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
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

    return (
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
                <label>Course Pasword</label>
                <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Input Course Room Character"
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
      
    )
  }
}

export default withRouter(CourseForm)
