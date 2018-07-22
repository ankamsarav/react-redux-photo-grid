import React from "react";
import Header from "../components/header/Header";

import PhotoGrid from "./PhotoGrid" ;
import SinglePhoto from "./SinglePhoto" ;

import { Route, Switch } from 'react-router-dom';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

const Main = ({match, props}) => {
    console.log("props");
    console.log(props);
    return(
        <div>
            { React.cloneElement(props.children, props) }
            <Header />
            <Switch>
                <Route exact path={`${match.path}`} component={PhotoGrid} />
                <Route path={`${match.path}view/:postId`} component={SinglePhoto} />
                <Route component={render => (<div>no data </div>)} />
            </Switch>
            
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main);




export default MainApp;