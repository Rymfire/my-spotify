import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Router from "./routes";
import Auth from "./routes/Auth";

class App extends Component {
    render() {
        return (this.props.tokens.authorization_code.code) ? <Router/> : <Auth/>;
    }
}

function mapStateToProps(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {}

export default connect(mapStateToProps, actionCreators)(App);
