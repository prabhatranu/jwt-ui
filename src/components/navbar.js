import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

// styling
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import UserStore from '../store/UserStore';
import TokenStore from '../store/TokenStore';

class Navbar extends Component {
  state = {
    anchorEl: null,
    userName: ''
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    UserStore.setUser(null);
    TokenStore.setToken(null);
    window.location = '/';
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <AppBar className="dashToolbar" position="static">
          <Toolbar>
            <IconButton
              className="dashToolbarButton"
              color="inherit"
              aria-label="Menu"
              onClick={this.props.handleDrawerToggle}
            >
              <Icon className="material-icons">menu</Icon>
            </IconButton>
            <Typography
              className="dashToolbarTitle"
              variant="title"
              color="inherit"
            >
              {this.props.name}
            </Typography>
            <Typography
              className="dashToolbarTitleUser"
              variant="title"
              color="inherit"
            >
              Jhone Doe
            </Typography>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? 'fade-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className="dashToolbarMenu"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'top'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'top'
              }}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              className="dashToolbarMenuItem"
              elevation="1"
            >
              <MenuItem onClick = {this.handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
