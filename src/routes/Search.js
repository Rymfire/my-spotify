import React, {Component} from "react";
import {connect} from "react-redux";
import searchActions from "../redux/actions/searchActions";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
} from "@material-ui/core";
import MyAppBar from "../components/global/MyAppBar";

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

    formateArtists(artistsList) {
        let formatedArtists = null;
        for (const artist in artistsList) {
            formatedArtists = (!formatedArtists) ? artistsList[artist].name :`${formatedArtists}, ${artistsList[artist].name}`;
        }
        return formatedArtists;
    }

    formateData() {
        switch (this.props.match.params.type) {
            case 'album':
                return this.props.search[this.props.match.params.type].result.items.map((item) => {
                    return {
                        image: (item.images.length !== 0) ? item.images[1].url : null,
                        title: item.name,
                        subTitle: this.formateArtists(item.artists),
                        url: `/album/${item.id}`,
                    }
                });
            case 'artist':
                return this.props.search[this.props.match.params.type].result.items.map((item) => {
                    return {
                        image: (item.images.length !== 0) ? item.images[1].url : null,
                        title: item.name,
                        subTitle: `${item.followers.total} followers`,
                        url: `/artist/${item.id}`,
                    }
                });
            case 'playlist':
                return this.props.search[this.props.match.params.type].result.items.map((item) => {
                    return {
                        image: (item.images.length !== 0) ? item.images[0].url : null,
                        title: item.name,
                        subTitle: item.owner.display_name,
                        url: `/playlist/${item.id}`,
                    }
                });
            case 'track':
                return this.props.search[this.props.match.params.type].result.items.map((item) => {
                    return {
                        image: (item.album.images.length !== 0) ? item.album.images[1].url : null,
                        title: item.name,
                        subTitle: this.formateArtists(item.artists),
                        url: `/album/${item.album.id}`,
                    }
                });
            default:
                break;
        }
    }

    generateCardView(data) {
        return data.map((item) =>
            <Grid item xs={6} md={3} xl={2}>
                <Card>
                    <CardActionArea onClick={() => this.props.history.push(item.url)}>
                        {(item.image) ? <CardMedia
                            component="img"
                            height="250"
                            width="250"
                            image={item.image}
                            title="Card media"
                            /> : null}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.subTitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }

    render() {
        if (this.props.search[this.props.match.params.type]
            && this.props.search[this.props.match.params.type].result
            && this.props.search[this.props.match.params.type].result.items) {
            return (
                <div>
                    <MyAppBar history={this.props.history}/>
                    <Grid
                        container
                        spacing={2}
                        style={{
                            width: '100%',
                            margin: '0px',
                        }}
                        alignItems="stretch"
                    >
                        {this.generateCardView(this.formateData())}
                    </Grid>
                </div>
            );
        } else {
            return null;
        }
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
