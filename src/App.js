import React, { Component } from 'react';
import './App.scss';

import MainApp from "./containers/Main" ;
import PhotoGrid from "./containers/PhotoGrid" ;
import SinglePhoto from "./containers/SinglePhoto" ;

import { Router, Route,browserHistory } from 'react-router-dom';
import {Provider} from "react-redux";
import store, {history} from "./store";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
              <Route path="/" component={MainApp} />
          </div>
        </Router>
      </Provider>
      
      
    );
  }
}

export default App;
