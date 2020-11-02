import React, {Component} from "react";
import {connect} from "react-redux";
import artistActions from "../redux/actions/artistActions";
import AlbumList from "../components/AlbumList";
import MyAppBar from "../components/global/MyAppBar";

import "./Artist.css";

class Artist extends Component {
    componentDidMount() {
        this.props.getArtist(this.props.match.params.uid);
        this.props.getArtistAlbum(this.props.match.params.uid);
    }

    render() {
        if (this.props.artist.data && Object.keys(this.props.artist.data).length !== 0) {
            return (
                <div>
                    <MyAppBar history={this.props.history}/>
                    <div className="artist-section">
                        <img
                            src={this.props.artist.data.images[1].url}
                            alt={this.props.artist.data.name}
                            style={{
                                borderRadius: 10000,
                                marginTop: 16,
                                marginBottom: 16,
                            }}
                        />
                        <div className="artist-info">
                            <h1 className="name">{this.props.artist.data.name}</h1>
                            <p className="followers">{this.props.artist.data.followers.total} followers</p>
                        </div>
                    </div>
                    <AlbumList history={this.props.history} value={this.props.artist.albums}/>
                </div>
            );
        } else {
            return null;
        }
    };
}

function mapStateToProps(state) {
    const {artist} = state;
    return {artist};
}

const actionCreators = {
    getArtist: artistActions.getArtist,
    getArtistAlbum: artistActions.getArtistAlbum,
}

export default connect(mapStateToProps, actionCreators)(Artist);
