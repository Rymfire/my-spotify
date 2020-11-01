import React, { Component } from 'react';
import {Link} from "react-router-dom";
import SearchBar from "../components/global/SearchBar";

class Home extends Component {
    state = {  }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Home</h1>
                <Link to="/artist/3CnCGFxXbOA8bAK54jR8js">Vald</Link>
                <SearchBar history={this.props.history}/>
            </div>
        );
    }
}

export default Home;
