import React, {Component} from "react";
import {connect} from "react-redux";
import albumActions from "../redux/actions/albumActions";
import TrackList from "../components/Album/TrackList";

class Album extends Component {

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.uid);
    }

    render() {
        console.log(this.props.album);
        if (this.props.album.result && Object.keys(this.props.album.result).length !== 0) {
            return (
                <div>
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
