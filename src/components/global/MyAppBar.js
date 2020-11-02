import React, {Component} from "react";
import {
    AppBar,
    Avatar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {connect} from "react-redux";
import tokensActions from "../../redux/actions/tokensActions";
import SearchBar from "./SearchBar";
import userActions from "../../redux/actions/userActions";
import {AppIcon} from "../../assets";

import "./MyAppBar.css"

class MyAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    componentDidMount() {
        this.props.getMyUser();
    }

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        return (
            <AppBar position="static">
                <Toolbar id="my-app-bar">
                    <div className="my-spotify-icon">
                        <a href="/">
                            <img
                                src={AppIcon.spotify}
                                alt="mySpotify icon"
                            />
                        </a>
                    </div>
                    <SearchBar history={this.props.history}/>
                    <div>
                        {
                            (this.props.user.myUser && Object.keys(this.props.user.myUser).length !== 0) ?
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    {(this.props.user.myUser.images.length !== 0)
                                        ? <Avatar
                                            src={this.props.user.myUser.images[0].url}
                                            alt={this.props.user.myUser.display_name}
                                        />
                                        : <AccountCircle color="white"/>
                                    }
                                </IconButton>
                            </div>
                                : null
                        }
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.props.logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

const actionCreators = {
    logout: tokensActions.logout,
    getMyUser: userActions.getMyUser,
}

export default connect(mapStateToProps, actionCreators)(MyAppBar);
