import React, { Component } from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import { HashRouter, Switch, Route } from 'react-router-dom';
import signup from './components/signup'
import Home from './containers/HomePage'
import Room from './containers/RoomPage'
import NotFound from './components/NotFound'
import styles from './App.css'

export class App extends Component {
    render() {
        return (
            <Provider store={store} basename={process.env.PUBLIC_URL}>
                <HashRouter>
                    <Switch>
                        <Route path="/signup" component={signup} />
                        <Route exact path="/" component={Home} />
                        <Route path="/r/:room" component={Room} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

export default App
