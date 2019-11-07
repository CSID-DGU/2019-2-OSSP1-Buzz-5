import React, { Component } from 'react'

export class CourseList extends Component {
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

                <div class="col-md-9">
                  

                </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default CourseList
