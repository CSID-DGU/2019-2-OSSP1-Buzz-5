import React, { Component, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import EnterRoomPage from './containers/EnterRoomPage'
import Room from './containers/RoomPage'
import Team from './components/Team'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.css'
import CourseList from './components/CourseList'
import CourseForm from './components/CourseForm'
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            authenticated: false,
            name: "",
            login: this.login,
            logout: this.logout
        }
        // this.logined = this.logined.bind(this)
    }


    login = () => {
        this.setState({
            authenticated: true,
            name: window.sessionStorage.getItem('name')
        })
        // console.log(this.state.authenticated)
    }

    logout = () => {
        this.setState({
            authenticated: false,
            name: ""
        })
        window.sessionStorage.removeItem('email');
        window.sessionStorage.removeItem('password');
        window.sessionStorage.removeItem('name');
    }

    componentWillMount = () => {
        const email = window.sessionStorage.getItem('email');
        if(email) {
            this.login()
        } else {
            this.logout()
        }
    }
    // const [user, setUser] = useState(null);
    // const authenticated = user != null;
    // const login = ({ email, password }) => setUser(signIn({ email, password }));
    // const logout = () => setUser(null);
    render() {
        // const {logged, onLogout} = this.state
        const auth = this.state.authenticated
        return (
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header authenticated={this.state.authenticated} userName={this.state.name} Logout={this.logout}/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/team" component={Team} />
                            <Route path="/login" component={Login} />
                            {/* <Route path="/login" render = {(props) => <Login {...props} Login={this.login} />} /> */}
                            {/* <Route path="/login" component={()=> <Login CheckLogin={this.logined} />} /> */}
                            {/* <Route path="/login" render={props => (<Login location={props.location}{...props}/>)} /> */}
                            <Route path="/signup" component={Signup} />
                            { auth ? <Route path="/courselist" component={CourseList}/> : <Redirect to="/login" />}
                            { auth ? <Route path="/courseform" component={CourseForm}/> : <Redirect to="/login" />}
                            { auth ? <Route path="/courseroom" component={EnterRoomPage} /> : <Redirect to="/login" />}
                            { auth ? <Route path="/r/:room" component={Room} /> : <Redirect to="/login" />}
                        </Switch>
                        <Footer authenticated={this.state.authenticated} Logout={this.logout}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App
