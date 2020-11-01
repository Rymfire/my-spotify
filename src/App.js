import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Router from "./routes";
import Auth from "./routes/Auth";

class App extends Component {
    render() {
        return (
            ((this.props.tokens.authorization_code.code && !this.props.tokens.requesting.authorization_code)
            && this.props.tokens.tokens
            && (this.props.tokens.tokens.access_token)) ? <Router/> : <Auth/>);
    }
}

function mapStateToProps(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {}

export default connect(mapStateToProps, actionCreators)(App);
