import React, { Component } from 'react';
import { AppIcon } from '../assets';
import { Button } from "@material-ui/core";
import "./login.css"

class Login extends Component {

    navigateLogin() {
        alert('Logging in...');
    }

    render() { 
        return(
            <div className="login">
                <img
                    src={AppIcon.spotify}
                    alt=""
                    className="icon"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{
                        borderRadius: 99,
                        fontWeight: '800',
                        color: "white",
                    }}
                    disableElevation
                    onClick={this.navigateLogin}
                >
                    LOGIN WITH SPOTIFY
                </Button>
            </div>
        );
    }
}

export default Login;
