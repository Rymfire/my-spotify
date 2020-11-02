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
import './SearchBar.css';

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
            <div className="search-bar">
                <TextField
                    variant="filled"
                    placeholder="Search"
                    value={this.state.query}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'query',
                        id: 'searchbar-query-input',
                    }}
                    color="primary"
                    className="form"
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
                        color="primary"
                    >
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="playlist">Playlist</option>
                        <option value="track">Track</option>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{
                        borderRadius: 99,
                        fontWeight: '800',
                        color: 'black',
                    }}
                    disableElevation
                    onClick={() => {
                        this.props.history.push(`/search/${this.state.type}/${this.state.query}`);
                    }}>
                    Search
                </Button>
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
