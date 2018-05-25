import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

import {searchRobots} from './reducers/reducers';

//const logger = createLogger();
//const store = createStore(searchRobots);//, applyMiddleware(logger));
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
