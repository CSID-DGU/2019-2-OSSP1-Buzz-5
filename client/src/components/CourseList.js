import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import logo from '../assets/logo_wxw.png';
import './css/Footer.scss';
import './css/Course.scss'

export class CourseList extends Component {
  id=0;
  state = {
    JavaScript_Count:0,
    Cpp_Count:0,
    Java_Count:0,
    C_Count:0,
    ObjC_Count:0,
    Python_Count:0,
    Go_Count:0,
    Kotlin_Count:0,
    Swift_Count:0,
    RoomInformation : []
  }

  componentWillMount = () => {                  // DB에 저장한거 한번에 불러올것임.
    const temp = this.props.location.state
    const {RoomInformation} = this.state.RoomInformation;
    console.log(temp)
    if(temp!=undefined) {
      console.log(111121212)
      this.setState(state => {
        state.RoomInformation.push(temp)
      })
    } 
    console.log(this.state.RoomInformation)
  }

  // listRender = () => {
  //   const {RoomList} = this.state.RoomInformation;
  //   return (
  //     this.state.RoomInformation.map(listItem => {
  //       <div>
  //         <h5>{listItem.course_name}</h5>
  //         <h6>{listItem.description}</h6>
  //         <h6>{listItem.tuter_name}</h6>
  //         <h6>{listItem.language}</h6>
  //         <h6>{listItem.date}</h6>
  //       </div>
  //     })
  //   );
  // }

  routeChange = () => {
    this.props.history.push('/courseform')
  }

  render() {
    const auth = this.props.authenticated
    return (
      <div>
        <div className="row fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Course List</h2>
                <hr/>
              </div>
            </div>
          </div>
        
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5 className="">Search</h5>
                <div className="input-group">
                  <input className="form-control" placeholder="Search" name="srch-term" id="srch-term"></input>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fa fa-search"/>
                    </button>
                  </div>
                </div>
                <hr/>
                <div className="list-group">
                  <h5>Language</h5>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    JavaScript<span className="badge badge-secondary">{this.state.JavaScript_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    C++<span className="badge badge-secondary">{this.state.Cpp_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Java<span className="badge badge-secondary">{this.state.Java_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    C<span className="badge badge-secondary">{this.state.C_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Objective-C<span className="badge badge-secondary">{this.state.ObjC_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Python<span className="badge badge-secondary">{this.state.Python_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Go<span className="badge badge-secondary">{this.state.Go_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Kotlin<span className="badge badge-secondary">{this.state.Kotlin_Count}</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center h6 text-dark">
                    Swift<span className="badge badge-secondary">{this.state.Swift_Count}</span>
                  </a>
                </div>
              </div>

              <div className="col-md-9">
                <div className="card card-body bg-light">
                  <form>
                    <h5 className="card-title">Create Course Room</h5>
                    <button className="btn btn-outline-primary ml-auto" onClick={this.routeChange}>Create</button>
                  </form>
                </div>
                <hr/>
                <div>
                    {this.state.RoomInformation.map((listItem)=>{
                      return (
                        <div>
                          <a className="d-flex justify-content-between align-items-center h3" href="/courseroom">{listItem.course_name}
                            <span className="badge badge-secondary">{listItem.tutor}</span>
                          </a>
                          <h6 className="small d-flex justify-content-between align-items-center">{listItem.date}
                            <span className="badge badge-primary">{listItem.language}</span>
                          </h6>
                          <br/>
                          <h6>{listItem.description}</h6>
                          <hr/>
                        </div>
                      );
                    })}
                </div>
                
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

export default withRouter(CourseList)
