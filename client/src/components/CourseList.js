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
                    <i class="glyphicon glyphicon-search"/>
                  </button>
                </div>
              </div>
              <hr/>
              <div class="list-group">
                <h5>Language</h5>
                <a href="#" class="list-group-item"><span class="badge">0</span>JavaScript</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>C++</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Java</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>C</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Objective-C</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Python</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Go</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Kotlin</a>
                <a href="#" class="list-group-item"><span class="badge">0</span>Swift</a>
              </div>
            </div>

            <div class="col-md-9">
              <div className="card card-body bg-light">
                <h5 className="card-title">Create Course Room</h5>
                <button className="btn btn-default ml-auto" onClick={this.routeChange}>Create</button>
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
