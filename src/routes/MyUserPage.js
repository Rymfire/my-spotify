import React, {Component} from "react";
import {connect} from "react-redux";
import tokensActions from "../redux/actions/tokensActions";
import userActions from "../redux/actions/userActions";
import playlistActions from "../redux/actions/playlistActions";

class MyUserPage extends Component {

    componentDidMount() {
    }

    render() {
        if (this.props.tokens.authorization_code.code) {
            return (
                <div>
                    <button onClick={this.props.getAccessToken}>Refresh</button>
                    <button onClick={this.props.getMyUser}>User</button>
                    <button onClick={this.props.getAllMyUserPlaylists}>Playlists</button>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {
    getAccessToken: tokensActions.getAccessToken,
    getMyUser: userActions.getMyUser,
    getAllMyUserPlaylists: playlistActions.getAllMyUserPlaylists,
}

export default connect(mapStateToProps, actionCreators)(MyUserPage);
