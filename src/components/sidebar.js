import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

// styling
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import Icon from 'material-ui/Icon';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

class sidebar extends Component {
  state = {
    open: false,
    openOne: false,
    openTwo: false,
    openThree: false
  };

  handleClick = name => event => {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
      <div>
        <List component="nav" className="dashSidebar">
          <Link className="sidebarlogo" to="/dashboard">
            <img alt="Neviton" src={logo} />
          </Link>

          <ListItem
            button
            onClick={this.handleClick('openOne')}
            className={
              this.state.openOne ? 'sidebarLink sidebarLinkOpen' : 'sidebarLink'
            }
          >
            <ListItemIcon>
              <Icon className="material-icons">access_time</Icon>
            </ListItemIcon>
            <ListItemText disableTypography inset primary="Page 1" />
            {this.state.openOne ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse
            in={this.state.openOne}
            timeout="auto"
            unmountOnExit
            className="sidebarCollups"
          >
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/#">
                <ListItemText
                  className="sidebarNested"
                  disableTypography
                  inset
                  primary="Page 1 - 1"
                />
              </ListItem>

              <ListItem button component={Link} to="/#">
                <ListItemText
                  className="sidebarNested"
                  disableTypography
                  inset
                  primary="Page 1 - 2"
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            className="listItemColor"
            button
            component={Link}
            to="/#"
            className="sidebarLink"
          >
            <ListItemIcon>
              <Icon className="material-icons">assignment_late</Icon>
            </ListItemIcon>
            <ListItemText disableTypography inset primary="Page 2" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default sidebar;
