import React, {Component} from "react";
import {
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Table,
} from "@material-ui/core";

export default class TrackList extends Component {

    formateArtists(artistsList) {
        let formatedArtists = [];
        for (const artist in artistsList) {
            formatedArtists.push(<a href={`/artist/${artistsList[artist].id}`}>{artistsList[artist].name}</a>);
            if (artistsList[artist - 0 + 1])
                formatedArtists.push(', ');
        }
        return formatedArtists;
    }

    formateDuration(time) {
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${(hours > 0) ? `${hours}:` : ''}${minutes}:${seconds}`
    }

    formateTrackLine(track) {
        return (
            <TableRow>
                <TableCell align="left">{track.track_number}</TableCell>
                <TableCell align="left">{track.name}</TableCell>
                <TableCell align="left">{this.formateArtists(track.artists)}</TableCell>
                <TableCell align="right">{this.formateDuration(track.duration_ms)}</TableCell>
            </TableRow>
        );
    }

    render() {
        const formatedLineList = this.props.value.items.map((value) => this.formateTrackLine(value));
        return (
            <TableContainer style={{width: "100%"}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Artist</TableCell>
                            <TableCell align="right">Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formatedLineList}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
