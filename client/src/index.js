// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './containers/HomePage'
// import Room from './containers/RoomPage'
// import NotFound from './components/NotFound'
// import styles from './app.css'

// render(
// 	<Provider store={store}>
// 		<BrowserRouter basename={process.env.basename}>
// 			<Switch>
// 				<Route exact path="/" component={Home} />
// 				<Route path="/r/:room" component={Room} />
// 				<Route path="*" component={NotFound} />
// 			</Switch>
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
