import React, { Component } from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import Auth from "./routes/auth";
import Home from "./routes/home";

class App extends Component {
    state = {}
    render() {
        console.log("Hello world !");
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Auth} />
                    <Route path="/home" component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
