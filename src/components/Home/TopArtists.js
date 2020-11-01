import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

class TopArtists extends Component {
    formateArtists(artistsList) {
        let formatedArtists = null;
        for (const artist in artistsList) {
            formatedArtists = (!formatedArtists) ? artistsList[artist].name :`${formatedArtists}, ${artistsList[artist].name}`;
        }
        return formatedArtists;
    }

    generateCardView(data) {
        return data.map((item) =>
            <Card key={`${item.name}-TopArtists`}>
                <CardActionArea onClick={() => this.props.history.push(`/artist/${item.id}`)}>
                    {(item.images && item.images.length !== 0) ? <CardMedia
                        component="img"
                        height="250"
                        width="250"
                        image={item.images[1].url}
                        title={item.name}
                    /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.followers.total} followers
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    render() {
        if (this.props.user.topArtists && this.props.user.topArtists.result) {
            const cardView = this.generateCardView(this.props.user.topArtists.result.items)
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

export default connect(mapStateToProps, null)(TopArtists);
