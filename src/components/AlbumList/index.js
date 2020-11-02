import React, {Component} from "react";
import SingleAlbum from "./SingleAlbum";
import {Grid} from "@material-ui/core";

export default class AlbumList extends Component {
    render() {
        if (this.props.value && Object.keys(this.props.value).length !== 0) {
            const albumFormatedList = (() => {
                return this.props.value.items.map(value => {
                    return (value.album_type === 'album')
                        ? <Grid
                            item
                            xs={6}
                            md={3}
                            xl={2}
                        >
                            <SingleAlbum history={this.props.history} value={value}/>
                        </Grid>
                        : null
                }).filter(value => value !== null);
            })();
            return (
                <div>
                    <Grid
                        container
                        spacing={2}
                        style={{
                            width: '100%',
                            margin: '0px',
                        }}
                        alignItems="stretch"
                    >
                    {albumFormatedList}
                    </Grid>
                </div>
            );
        } else {
            return null;
        }
    }
}
