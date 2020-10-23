import React, { Component } from 'react';
import {connect} from "react-redux";
import tokensActions from "../redux/actions/tokensActions";

class Auth extends Component {
    render() {
        return (
            <button onClick={this.props.getAuthorizationCode}>test</button>
        );
    }
}

function mapState(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {
    getAuthorizationCode: tokensActions.getAuthorizationCode,
}

export default connect(mapState, actionCreators)(Auth);
