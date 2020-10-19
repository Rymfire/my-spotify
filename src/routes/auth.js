import React, { Component } from 'react';
import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from '../utils/settings';

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
            <SpotifyLogin
                clientId={clientId}
                redirectUri={redirectUri}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        );
    }
}

export default Auth;