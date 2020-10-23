import React, { Component } from "react";
import Login from "./routes/login"
import "./app.css";

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

export default App;
