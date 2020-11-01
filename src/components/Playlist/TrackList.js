import React, {Component} from "react";
import {
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@material-ui/core";

export default class TrackList extends Component {

    formateArtists(artistsList) {
        let formatedArtists = null;
        for (const artist in artistsList) {
            formatedArtists = (!formatedArtists) ? artistsList[artist].name :`${formatedArtists}, ${artistsList[artist].name}`;
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
                <TableCell align="right">{track.name}</TableCell>
                <TableCell align="right">{this.formateArtists(track.artists)}</TableCell>
                <TableCell align="right">{track.album.name}</TableCell>
                <TableCell align="right">{track.track_number}</TableCell>
                <TableCell align="right">{this.formateDuration(track.duration_ms)}</TableCell>
            </TableRow>
        );
    }

    render() {
        const formatedLineList = this.props.value.items.map((value) => this.formateTrackLine(value.track));
        return (
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Artist</TableCell>
                        <TableCell align="right">Album</TableCell>
                        <TableCell align="right">#</TableCell>
                        <TableCell align="right">Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formatedLineList}
                </TableBody>
            </TableContainer>
        );
    }
}
