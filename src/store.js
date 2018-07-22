import {createStore} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
// import {browserHistory} from "react-router-dom";
import { createBrowserHistory } from 'history';

import rootReducer from "./reducers";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultStore = {
    comments,
    posts
};

const store = createStore(rootReducer, defaultStore);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
