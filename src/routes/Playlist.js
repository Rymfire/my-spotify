import searchActions from "../redux/actions/searchActions";
import {connect} from "react-redux";
import React, {Component} from "react";
import playlistActions from "../redux/actions/playlistActions";
import TrackList from "../components/Album/TrackList";

class Playlist extends Component {
    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.uid);
    }

    formateArtists(artistsList) {
        let formatedArtists = null;
        for (const artist in artistsList) {
            formatedArtists = (!formatedArtists) ? artistsList[artist].name :`${formatedArtists}, ${artistsList[artist].name}`;
        }
        return formatedArtists;
    }

    render() {
        if (this.props.playlist.playlist.data && Object.keys(this.props.playlist.playlist.data).length !== 0) {
            return (
                <div>
                    <div>
                        <img src={this.props.playlist.playlist.data.images[1].url}/>
                        <p>{this.props.playlist.playlist.data.name}</p>
                        <p>By: {this.props.playlist.playlist.data.owner.display_name}</p>
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
