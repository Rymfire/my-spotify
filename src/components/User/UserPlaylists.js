import React, {Component} from 'react'
import {connect} from "react-redux";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

class UserPlaylists extends Component {
    formateArtists(artistsList) {
        let formatedArtists = [];
        for (const artist in artistsList) {
            formatedArtists.push(<a href={`/artist/${artistsList[artist].id}`}>{artistsList[artist].name}</a>);
            if (artistsList[artist - 0 + 1])
                formatedArtists.push(', ');
        }
        return formatedArtists;
    }

    generateCardView(data) {
        return data.map((item) =>
            <Card>
                <CardActionArea onClick={() => this.props.history.push(`/playlist/${item.id}`)}>
                    {(item.images && item.images.length !== 0) ? <CardMedia
                        component="img"
                        height="250"
                        width="250"
                        image={item.images[0].url}
                        title={item.name}
                    /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            By: {item.owner.display_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    render() {
        if (this.props.user.myPlaylists && this.props.user.myPlaylists.result) {
            const cardView = this.generateCardView(this.props.user.userPlaylists.result.items)
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

export default connect(mapStateToProps, null)(UserPlaylists);
