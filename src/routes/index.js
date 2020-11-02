import {
    BrowserRouter,
    Route
} from "react-router-dom";
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import Home from "./Home";
import Artist from "./Artist";
import Album from "./Album";
import Search from "./Search";
import Playlist from "./Playlist";
import User from "./User";
import Theme from "../utils/theme";

export default function Router() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/artist/:uid" component={Artist}/>
                    <Route path="/album/:uid" component={Album}/>
                    <Route path="/search/:type/:query" component={Search}/>
                    <Route path="/playlist/:uid" component={Playlist}/>
                    <Route path="/user/:uid" component={User}/>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    )
}
