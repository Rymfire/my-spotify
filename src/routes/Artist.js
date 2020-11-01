import React, {Component} from "react";
import {connect} from "react-redux";
import artistActions from "../redux/actions/artistActions";
import AlbumList from "../components/AlbumList";

class Artist extends Component {
    componentDidMount() {
        this.props.getArtist(this.props.match.params.uid);
        this.props.getArtistAlbum(this.props.match.params.uid);
    }

    render() {
        return (
            <div>
                Artist: {this.props.match.params.uid}
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
