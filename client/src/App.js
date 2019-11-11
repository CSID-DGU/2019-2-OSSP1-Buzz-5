import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Room from './containers/RoomPage'
import Team from './components/Team'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.css'
import CourseList from './components/CourseList'
import CourseForm from './components/CourseForm'

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/team" component={Team} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/courselist" component={CourseList}/>
                            <Route path="/courseform" component={CourseForm}/>
                            <Route path="/r/:room" component={Room} />
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
