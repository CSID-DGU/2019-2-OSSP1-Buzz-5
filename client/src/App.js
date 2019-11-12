import React, { Component, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
import {signIn} from './auth/Auth'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            authenticated: null
        }
    }

    logined = (email, password) => {
        var user = signIn({email, password});
        console.log("111213123")
        if(user) {
            this.setState({
                authenticated: true
            })
        }
    }
    // const [user, setUser] = useState(null);
    // const authenticated = user != null;
    // const login = ({ email, password }) => setUser(signIn({ email, password }));
    // const logout = () => setUser(null);
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header authenticated={this.state.authenticated}/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/team" component={Team} />
                            <Route login={this.logined} path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            { this.state.authenticated ? 
                                <Route path="/courselist" component={CourseList}/>
                                : <Redirect to="/login" />
                            }
                            { this.state.authenticated ? 
                                <Route path="/courseform" component={CourseForm}/>
                                : <Redirect to="/login" />
                            }
                            {/* <Route path="/courselist" component={CourseList}/> */}
                            {/* <Route path="/courseform" component={CourseForm}/> */}
                            <Route path="/r/:room" component={Room} />
                        </Switch>
                        <Footer authenticated={this.state.authenticated}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App
