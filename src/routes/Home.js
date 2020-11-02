import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import SearchBar from "../components/global/SearchBar";
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";
import tokensActions from "../redux/actions/tokensActions";
import TopArtists from "../components/Home/TopArtists";
import TopTracks from "../components/Home/TopTracks";
import MyPlaylists from "../components/Home/MyPlaylists";
import { AppIcon } from '../assets';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getAllTop();
    }

    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <h1>mySpotify</h1>
                    <SearchBar history={this.props.history}/>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        style={{
                            borderRadius: 99,
                            fontWeight: '800',
                            color: "white",
                        }}
                        disableElevation
                        onClick={this.props.logout}
                    >
                        LOGOUT
                    </Button>
                </div>
                <MyPlaylists history={this.props.history}/>
                <TopArtists history={this.props.history}/>
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
