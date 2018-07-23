import {createStore, applyMiddleware, compose} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk'
// import {browserHistory} from "react-router-dom";
import { createBrowserHistory } from 'history';

import rootReducer from "./reducers";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultStore = {
    comments,
    posts
};

// const store = createStore(rootReducer, defaultStore);

// export const history = syncHistoryWithStore(createBrowserHistory(), store);

export const history = createBrowserHistory();

const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

// export default store;

export default createStore(
    connectRouter(history)(rootReducer),
    defaultStore,
    composedEnhancers
  )
