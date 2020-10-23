import React, {Component} from "react";
import {connect} from "react-redux";
import tokensActions from "../redux/actions/tokensActions";

class MyUserPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAccessToken();
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
}

export default connect(mapStateToProps, actionCreators)(MyUserPage);
