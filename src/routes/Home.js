import React, { Component } from 'react';
import {Link} from "react-router-dom";
import SearchBar from "../components/global/SearchBar";

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/me">Test</Link>
                <SearchBar/>
            </div>
        );
    }
}

export default Home;
