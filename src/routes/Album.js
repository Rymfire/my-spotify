import React, {Component} from "react";
import {connect} from "react-redux";
import albumActions from "../redux/actions/albumActions";
import TrackList from "../components/Album/TrackList";
import MyAppBar from "../components/global/MyAppBar";

import "./Album.css"

class Album extends Component {

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.uid);
    }

    formateArtists(artistsList) {
        let formatedArtists = [];
        for (const artist in artistsList) {
            formatedArtists.push(<a href={`/artist/${artistsList[artist].id}`}>{artistsList[artist].name}</a>);
        }
        return formatedArtists;
    }

    render() {
        if (this.props.album.result && Object.keys(this.props.album.result).length !== 0) {
            const copyrights = this.props.album.result.copyrights.map((value) => <p className="copyright">{value.text}</p>)
            return (
                <div>
                    <MyAppBar history={this.props.history}/>
                    <div className="album-section">
                        <img
                            src={this.props.album.result.images[1].url}
                            alt={this.props.album.result.name}
                            style={{
                                borderRadius: 40
                            }}
                        />
                        <div className="album-description">
                            <h1 className="title">{this.props.album.result.name}</h1>
                            <p className="artist">By: {this.formateArtists(this.props.album.result.artists)}</p>
                            <p className="release">Release: {this.props.album.result.release_date}</p>
                            {copyrights}
                        </div>
                    </div>
                    <TrackList value={this.props.album.result.tracks}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    const {album} = state;
    return {album};
}

const actionCreators = {
    getAlbum: albumActions.getAlbum,
}

export default connect(mapStateToProps, actionCreators)(Album);
