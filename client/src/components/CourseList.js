import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './css/Course.scss'

export class CourseList extends Component {
  constructor(props) {
    super(props)
    
    this.state = this.props.location.state
  }

  routeChange = () => {
    this.props.history.push('/courseform')
  }

  render() {
    return (
      <div class="row fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Course List</h2>
              <hr/>
            </div>
          </div>
        </div>
      
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h5 class="">Search</h5>
              <div class="input-group">
                <input class="form-control" placeholder="Search" name="srch-term" id="srch-term"></input>
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <i class="fa fa-search"/>
                  </button>
                </div>
              </div>
              <hr/>
              <div class="list-group">
                <h5>Language</h5>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  JavaScript<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  C++<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Java<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  C<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Objective-C<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Python<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Go<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Kotlin<span class="badge badge-secondary">0</span>
                </a>
                <a href="#" class="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                  Swift<span class="badge badge-secondary">0</span>
                </a>
              </div>
            </div>

            <div class="col-md-9">
              <div className="card card-body bg-light">
                <form inline>
                  <h5 className="card-title">Create Course Room</h5>
                  <button className="btn btn-outline-primary ml-auto" onClick={this.routeChange}>Create</button>
                </form>
              </div>
              <hr/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(CourseList)
