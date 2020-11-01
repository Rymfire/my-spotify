import React, {Component} from "react";
import SingleAlbum from "./SingleAlbum";

export default class AlbumList extends Component {
    render() {
        if (this.props.value && Object.keys(this.props.value).length !== 0) {
            const albumFormatedList = (() => {
                return this.props.value.items.map(value => (value.album_type === 'album') ? <SingleAlbum history={this.props.history} value={value}/> : null).filter(value => value !== null);
            })();
            return (
                <div>
                    {albumFormatedList}
                </div>
            );
        } else {
            return null;
        }
    }
}
