import React, {Component} from "react";
import {
    AppBar,
    Typography,
    InputBase,
} from "@material-ui/core";
import {connect} from "react-redux";
import tokensActions from "../../redux/actions/tokensActions";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {AccountCircle} from "@material-ui/icons";
import SearchBar from "./SearchBar";
import userActions from "../../redux/actions/userActions";

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
                <Typography>MySpotify</Typography>
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
                                    ? <img src={this.props.user.myUser.images[0]} alt={this.props.user.myUser.name}/>
                                    : <AccountCircle/>
                                }
                            </IconButton>
                            <Typography>{this.props.user.myUser.name}</Typography>
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
