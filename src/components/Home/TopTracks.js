import React, {Component} from 'react'
import userActions from "../../redux/actions/userActions";
import tokensActions from "../../redux/actions/tokensActions";
import {connect} from "react-redux";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

class TopTracks extends Component {
    formateArtists(artistsList) {
        let formatedArtists = null;
        for (const artist in artistsList) {
            formatedArtists = (!formatedArtists) ? artistsList[artist].name :`${formatedArtists}, ${artistsList[artist].name}`;
        }
        return formatedArtists;
    }

    generateCardView(data) {
        return data.map((item) =>
            <Card>
                <CardActionArea onClick={() => this.props.history.push(`/album/${item.album.id}`)}>
                    {(item.album.images && item.album.images.length !== 0) ? <CardMedia
                        component="img"
                        height="250"
                        width="250"
                        image={item.album.images[1].url}
                        title="Card media"
                    /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.formateArtists(item.artists)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    render() {
        if (this.props.user.topTracks && this.props.user.topTracks.result) {
            const cardView = this.generateCardView(this.props.user.topTracks.result.items)
            return (
                <div>
                    {cardView}
                </div>
            )
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(TopTracks);
