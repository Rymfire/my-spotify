import React, {Component} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

export default class SingleAlbum extends Component {
    render() {
        return (
            <Card>
                <CardActionArea onClick={() => this.props.history.push(`/album/${this.props.value.id}`)}>
                    {(this.props.value.images) ? <CardMedia
                        component="img"
                        height="250"
                        width="250"
                        image={this.props.value.images[1].url}
                        title="Card media"
                    /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.value.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Release: {this.props.value.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
