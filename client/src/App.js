import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
import Room from './containers/RoomPage'
import Home from './containers/HomePage'
import Header from './components/Header';
import Footer from './components/Footer'
import styles from './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Provider store={store} basename={process.env.PUBLIC_URL}>
                    <HashRouter>
                        <Switch>
                            <Route path="/" component={Home}/>
                            <Route path="/r/:room" component={Room} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </HashRouter>
                </Provider>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default App

{/* <Provider store={store} basename={process.env.PUBLIC_URL}>
<HashRouter>
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/r/:room" component={Room} />
        <Route path="*" component={NotFound} />
    </Switch>
</HashRouter>
</Provider> */}