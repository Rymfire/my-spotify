import React, {Component} from "react";
import {
    Select,
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
            error: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        if (this.state.query.length === 0) {
            this.setState({error: "This field can't be empty"})
        } else {
            this.setState({error: null})
            this.props.history.push(`/search/${this.state.type}/${this.state.query}`);
        }
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    }

    render() {
        return (
            <div className="search-bar">
                <TextField
                    placeholder="Search"
                    value={this.state.query}
                    error={this.state.error}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'query',
                        id: 'searchbar-query-input'
                    }}
                    style={{
                        backgroundColor: "white",
                        borderTopLeftRadius: 99,
                        borderBottomLeftRadius: 99,
                        paddingLeft: 12,
                    }}
                    onKeyPress={(event) => {
                        console.log(event.key);
                        if (event.key === "Enter")
                            this.handleSubmit();
                    }}
                />
                <Select
                    value={this.state.type}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'type',
                        id: 'searchbar-type-select'
                    }}
                    style={{
                        backgroundColor: "white",
                        borderTopRightRadius: 99,
                        borderBottomRightRadius: 99,
                    }}
                >
                    <option value="album">Album</option>
                    <option value="artist">Artist</option>
                    <option value="playlist">Playlist</option>
                    <option value="track">Track</option>
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{
                        borderRadius: 99,
                        fontWeight: '800',
                        color: 'black',
                        marginLeft: 7,
                    }}
                    disableElevation
                    onClick={this.handleSubmit}>Search</Button>
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
