import React, {Component} from "react";
import {connect} from "react-redux";
import tokensActions from "../redux/actions/tokensActions";
import userActions from "../redux/actions/userActions";

class MyUserPage extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <button onClick={this.props.getAccessToken}>Refresh</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {tokens} = state;
    return {tokens};
}

const actionCreators = {
    getAccessToken: tokensActions.getAccessToken,
    getMyUser: userActions.getMyUser
}

export default connect(mapStateToProps, actionCreators)(MyUserPage);
