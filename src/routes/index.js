import {
    BrowserRouter,
    Route
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import MyUserPage from "./MyUserPage";
import Artist from "./Artist";
import Album from "./Album";
import Search from "./Search";
import Playlist from "./Playlist";

export default function Router() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/me" component={MyUserPage}/>
                <Route path="/artist/:uid" component={Artist}/>
                <Route path="/album/:uid" component={Album}/>
                <Route path="/search/:type/:query" component={Search}/>
                <Route path="/playlist/:uid" component={Playlist}/>
            </div>
        </BrowserRouter>
    )
}
