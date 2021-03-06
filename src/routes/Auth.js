import React, { Component } from 'react';
import {connect} from "react-redux";
import { Button } from "@material-ui/core";
import tokensActions from "../redux/actions/tokensActions";
import { AppIcon } from '../assets';
import "./Auth.css"


class Auth extends Component {
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
                    onClick={this.props.getAuthorizationCodeAndAccessToken}
                >
                    LOGIN WITH SPOTIFY
                </Button>
            </div>
        );
    }
}

function mapState(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {
    getAuthorizationCodeAndAccessToken: tokensActions.getAuthorizationCodeAndAccessToken,
}

export default connect(mapState, actionCreators)(Auth);

