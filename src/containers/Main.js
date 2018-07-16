import React from "react";
import Header from "../components/header/Header";

import PhotoGrid from "./PhotoGrid" ;
import SinglePhoto from "./SinglePhoto" ;

import { Route, Switch } from 'react-router-dom'

const Main = ({match}) => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path={`${match.path}`} component={PhotoGrid} />
                <Route path={`${match.path}view/:postId`} component={SinglePhoto} />
                <Route component={render => (<div>no data </div>)} />
            </Switch>
        </div>
    )
}

export default Main;