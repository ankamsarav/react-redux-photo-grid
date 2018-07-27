import React, { Component } from 'react';
import './App.scss';

import MainApp from "./containers/Main" ;
import PhotoGrid from "./containers/PhotoGrid" ;
import SinglePhoto from "./containers/SinglePhoto" ;

import { BrowserRouter, Router, Route,browserHistory } from 'react-router-dom';
import {Provider} from "react-redux";
import store, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router'

console.log("history");
console.log(history);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter  history={history}>
          <div className="App">
              <MainApp />
          </div>
        </ConnectedRouter>
      </Provider>
      
      
    );
  }
}

export default App;
