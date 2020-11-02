import React, { Component } from 'react';
import SearchBar from "../components/global/SearchBar";
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";
import tokensActions from "../redux/actions/tokensActions";
import TopArtists from "../components/Home/TopArtists";
import TopTracks from "../components/Home/TopTracks";
import MyPlaylists from "../components/Home/MyPlaylists";
import MyAppBar from "../components/global/MyAppBar";

class Home extends Component {
    componentDidMount() {
        this.props.getAllTop();
    }

    render() {
        return (
            <div>
                <MyAppBar history={this.props.history}/>
                <SearchBar history={this.props.history}/>
                <MyPlaylists history={this.props.history}/>
                <TopArtists history={this.props.history}/>
                <TopTracks history={this.props.history}/>
                <button onClick={this.props.logout}>logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

const actionCreators = {
    getAllTop: userActions.getAllTop,
    logout: tokensActions.logout,
}

export default connect(mapStateToProps, actionCreators)(Home);
