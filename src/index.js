import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {searchRobots, requestRobots} from './reducers'
import 'tachyons';

const logger = createLogger()

const rootReducer = (combineReducers({searchRobots, requestRobots})) // combineReducers is a function included with redux which allows to combine reducers in order to create a single store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) // applies middleware 'redux-logger' which console logs when an action happens

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

reportWebVitals();
