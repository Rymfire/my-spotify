import React, { Component } from 'react';
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";
import tokensActions from "../redux/actions/tokensActions";
import TopArtists from "../components/Home/TopArtists";
import TopTracks from "../components/Home/TopTracks";
import MyPlaylists from "../components/Home/MyPlaylists";
import MyAppBar from "../components/global/MyAppBar";

import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getAllTop();
    }

    render() {
        return (
            <div className="home">
                <MyAppBar history={this.props.history}/>
                <h2>My Playlists</h2>
                <MyPlaylists history={this.props.history}/>
                <h2>Top Artists</h2>
                <TopArtists history={this.props.history}/>
                <h2>Top Tracks</h2>
                <TopTracks history={this.props.history}/>
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
