import React from "react";
import Header from "../components/header/Header";

import PhotoGrid from "./PhotoGrid" ;
import SinglePhoto from "./SinglePhoto" ;

import { Route, Switch } from 'react-router-dom'

const Main = (props) => {
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={SinglePhoto} />
            </Switch>
        </div>
    )
}

export default Main;