import React, {Component} from "react";
import userActions from "../redux/actions/userActions";
import {connect} from "react-redux";
import UserPlaylists from "../components/User/UserPlaylists";
import MyAppBar from "../components/global/MyAppBar";

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.uid)
        this.props.getUserPlaylists(this.props.match.params.uid)
    }

    render() {
        return (
            <div>
                <MyAppBar history={this.props.history}/>
                {
                    (this.props.user.user.images && this.props.user.user.images.length !== 0)
                        ? <img src={this.props.user.user.images[0].url} alt={this.props.user.user.display_name}/>
                        : null
                }
                <p>{this.props.user.user.display_name}</p>
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
