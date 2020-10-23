import {
    BrowserRouter,
    Route
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import MyUserPage from "./MyUserPage";

export default function Router() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/me" component={MyUserPage}/>
            </div>
        </BrowserRouter>
    )
}
