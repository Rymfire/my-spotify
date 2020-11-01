import React, {Component} from "react";
import albumActions from "../redux/actions/albumActions";
import {connect} from "react-redux";
import searchActions from "../redux/actions/searchActions";

class Search extends Component {

    componentDidMount() {
        switch (this.props.match.params.type) {
            case 'album':
                this.props.searchAlbum(this.props.match.params.query);
                break;
            case 'artist':
                this.props.searchArtist(this.props.match.params.query);
                break;
            case 'playlist':
                this.props.searchPlaylist(this.props.match.params.query);
                break;
            case 'track':
                this.props.searchTrack(this.props.match.params.query);
                break;
            default:
                break;
        }
    }

    render() {
        //console.log(this.props.search[this.props.match.params.type]);
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {search} = state;
    return {search};
}

const actionCreators = {
    searchAlbum: searchActions.searchAlbum,
    searchArtist: searchActions.searchArtist,
    searchPlaylist: searchActions.searchPlaylist,
    searchTrack: searchActions.searchTrack,
}

export default connect(mapStateToProps, actionCreators)(Search);
