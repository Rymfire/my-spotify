import React, {Component} from "react";
import {connect} from "react-redux";
import albumActions from "../redux/actions/albumActions";
import TrackList from "../components/Album/TrackList";
import Link from "@material-ui/core/Link";
import MyAppBar from "../components/global/MyAppBar";

class Album extends Component {

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.uid);
    }

    formateArtists(artistsList) {
        let formatedArtists = [];
        for (const artist in artistsList) {
            formatedArtists.push(<Link to={`/artist/${artistsList[artist].id}`}>{artistsList[artist].name}</Link>);
        }
        return formatedArtists;
    }

    render() {
        if (this.props.album.result && Object.keys(this.props.album.result).length !== 0) {
            const copyrights = this.props.album.result.copyrights.map((value) => <p>{value.text}</p>)
            return (
                <div>
                    <MyAppBar history={this.props.history}/>
                    <div>
                        <img src={this.props.album.result.images[1].url} alt="this.props.album.result.name"/>
                        <p>{this.props.album.result.name}</p>
                        By: {this.formateArtists(this.props.album.result.artists)}
                        <p>Release: {this.props.album.result.release_date}</p>
                        {copyrights}
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
