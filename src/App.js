import React, { Component } from 'react';
import './App.scss';

import Main from "./containers/Main" ;
import PhotoGrid from "./containers/PhotoGrid" ;
import SinglePhoto from "./containers/SinglePhoto" ;

import { BrowserRouter, Route,browserHistory } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div className="App">
            <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
