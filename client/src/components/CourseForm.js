import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import "./css/Course.scss"

export class CourseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      course_name : null,
      tuter_name : null,
      description : null,
      language : null,
      date : null,

      formErrors : {
        course_name : "",
        description : "",
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case "course_name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "description":
        formErrors.description =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  }

  routeChange = () => {
    this.props.history.push('/courselist')
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div class="row-fluid">
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
                    name="name"
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
                <select noValidate onChange={this.handleChange}>
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

              <button type="submit" onSubmit={this.handleSubmit} onClick={this.routeChange}>Create Course</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

export default withRouter(CourseForm)
