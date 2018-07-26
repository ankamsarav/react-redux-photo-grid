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
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" render= {(props) => (<PhotoGrid {...this.props}/> )}/>
                    <Route exact path="/view/:postId" render= {(props) => (<SinglePhoto {...this.props} /> )} />
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