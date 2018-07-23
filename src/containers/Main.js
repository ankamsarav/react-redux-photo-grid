import React, {Component} from "react";
import Header from "../components/header/Header";

import PhotoGrid from "./PhotoGrid" ;
import SinglePhoto from "./SinglePhoto" ;

import { Route, Switch , withRouter} from 'react-router-dom';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

class Main extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={PhotoGrid} />
                    <Route exact path="/view/:postId" component={SinglePhoto} />
                    <Route component={render => (<div>no data </div>)} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main);




export default withRouter(MainApp);