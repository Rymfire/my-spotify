import React, {Component} from "react";
import Link from "@material-ui/core/Link";

export default class SingleAlbum extends Component {
    render() {
        return (
            <Link to={`/album/${this.props.value.id}`}>
                <div>
                    <img src={this.props.value.images[1].url}/>
                    <p>{this.props.value.name}</p>
                    <p>Release: {this.props.value.release_date}</p>
                </div>
            </Link>
        );
    }
}
