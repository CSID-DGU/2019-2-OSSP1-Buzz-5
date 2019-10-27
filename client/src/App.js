import React, { Component } from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './containers/HomePage'
import Room from './containers/RoomPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.css'

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <Header/> */}
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Home} />
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
