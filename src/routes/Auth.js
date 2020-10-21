import React, { Component } from 'react';
import {connect} from "react-redux";
import tokenActions from "../redux/actions/tokenActions";

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleFailure = this.handleFailure.bind(this);
    }

    handleSuccess(response) {
        this.response = response
        console.log(this.response);
    }

    handleFailure(response) {
        this.response = response
        console.log(this.response);
    }

    render() {
        return (
            <button onClick={this.props.spotifySignIn}>test</button>
        );
    }
}

function mapState(state) {
    const {token} = state;
    return {token};
}

const actionCreators = {
    spotifySignIn: tokenActions.signIn,
}

export default connect(mapState, actionCreators)(Auth);
