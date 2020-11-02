import {connect} from "react-redux";
import React, {Component} from "react";
import playlistActions from "../redux/actions/playlistActions";
import TrackList from "../components/Playlist/TrackList";
import MyAppBar from "../components/global/MyAppBar";

import "./Playlist.css"

class Playlist extends Component {
    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.uid);
    }

    formateArtists(artistsList) {
        let formatedArtists = [];
        for (const artist in artistsList) {
            formatedArtists.push(<a href={`/artist/${artistsList[artist].id}`}>{artistsList[artist].name}</a>);
            if (artistsList[artist - 0 + 1])
                formatedArtists.push(', ');
        }
        return formatedArtists;
    }

    render() {
        if (this.props.playlist.playlist.data && Object.keys(this.props.playlist.playlist.data).length !== 0) {
            return (
                <div>
                    <MyAppBar history={this.props.history}/>
                    <div className="playlist-section">
                        <img
                            src={this.props.playlist.playlist.data.images[0].url}
                            alt={this.props.playlist.playlist.data.name}
                            style={{
                                borderRadius: 40,
                                width: 400,
                                height: 400,
                            }}
                        />
                        <div className="playlist-description">
                            <h1 className="title">{this.props.playlist.playlist.data.name}</h1>
                            <p className="owner">By: <a href={`/user/${this.props.playlist.playlist.data.owner.id}`}>{this.props.playlist.playlist.data.owner.display_name}</a></p>
                        </div>
                    </div>
                    <TrackList value={this.props.playlist.playlist.data.tracks}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    const {playlist} = state;
    return {playlist};
}

const actionCreators = {
    getPlaylist: playlistActions.getPlaylist,
}

export default connect(mapStateToProps, actionCreators)(Playlist);
