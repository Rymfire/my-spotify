import React, {Component} from "react";
import userActions from "../redux/actions/userActions";
import {connect} from "react-redux";
import UserPlaylists from "../components/User/UserPlaylists";
import MyAppBar from "../components/global/MyAppBar";

import "./User.css"

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.uid)
        this.props.getUserPlaylists(this.props.match.params.uid)
    }

    render() {
        return (
            <div>
                <MyAppBar history={this.props.history}/>
                <div className="user-section">
                    {
                        (this.props.user.user.images && this.props.user.user.images.length !== 0)
                            ? <img
                                src={this.props.user.user.images[0].url}
                                alt={this.props.user.user.display_name}
                                style={{
                                    borderRadius: 1000,
                                }}
                            />
                            : null
                    }
                    <div className="user-description">
                        <h1 className="user-name">{this.props.user.user.display_name}</h1>
                    </div>
                </div>
                <UserPlaylists history={this.props.history}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

const actionCreators = {
    getUser: userActions.getUser,
    getUserPlaylists: userActions.getUserPlaylists,
}

export default connect(mapStateToProps, actionCreators)(User);
