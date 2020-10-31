import React, {Component} from "react";
import {
    Select,
    FormControl,
    InputLabel,
    TextField,
    Button,
} from "@material-ui/core";
import {connect} from "react-redux";
import searchActions from "../../redux/actions/searchActions";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "track",
            query: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    }

    render() {
        return (
            <div>
                <TextField
                    native
                    placeholder="Search"
                    value={this.state.query}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'query',
                        id: 'searchbar-query-input'
                    }}
                />
                <FormControl>
                    <InputLabel>Type</InputLabel>
                    <Select
                        native
                        value={this.state.type}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'type',
                            id: 'searchbar-type-select'
                        }}
                    >
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="playlist">Playlist</option>
                        <option value="track">Track</option>
                    </Select>
                </FormControl>
                <Button onClick={() => {
                    switch (this.state.type) {
                        case 'album':
                            this.props.searchAlbum(this.state.query);
                        case 'artist':
                            this.props.searchArtist(this.state.query);
                        case 'playlist':
                            this.props.searchPlaylist(this.state.query);
                        case 'track':
                            this.props.searchTrack(this.state.query);
                        default:
                            break;
                    }
                }}>Search</Button>
            </div>
        );
    }
}

const actionCreators = {
    searchAlbum: searchActions.searchAlbum,
    searchArtist: searchActions.searchArtist,
    searchPlaylist: searchActions.searchPlaylist,
    searchTrack: searchActions.searchTrack,
}

export default connect(null, actionCreators)(SearchBar);
