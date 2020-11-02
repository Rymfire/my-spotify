import React, {Component} from "react";
import {connect} from "react-redux";
import artistActions from "../redux/actions/artistActions";
import AlbumList from "../components/AlbumList";
import MyAppBar from "../components/global/MyAppBar";

class Artist extends Component {
    componentDidMount() {
        this.props.getArtist(this.props.match.params.uid);
        this.props.getArtistAlbum(this.props.match.params.uid);
    }

    render() {
        return (
            <div>
                <MyAppBar history={this.props.history}/>
                <div>
                    <img src={this.props.artist.data.images[1].url} alt="this.props.artist.data.name"/>
                    <p>{this.props.artist.data.name}</p>
                    <p>{this.props.artist.data.followers.total} followers</p>
                </div>
                <AlbumList history={this.props.history} value={this.props.artist.albums}/>
            </div>
        );
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
