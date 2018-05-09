import React, { Component, PropTypes } from 'react';
import '../App.css';
import '../Animate.css';

import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Logo from '../logo.svg';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import Grid from 'material-ui/Grid';
import Sidebar from '../components/sidebar.js';
import Navbar from '../components/navbar';
import IconButton from 'material-ui/IconButton';
import LoginService from '../service/LoginService';
const loginService = new LoginService();

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
        }
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    testDelete = () => {

        loginService.getCompanyList((flag, data) => {
            if (flag) {
                alert(flag)

            }
           
        });

    }

    render() {
        return (
            <div>
                <div className="dashWrapper">

                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: false,
                            }}
                        >
                            <Sidebar />
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                        >
                            <Sidebar />
                        </Drawer>
                    </Hidden>
        
                    <div className="dashBody">
                        
                        <Navbar handleDrawerToggle={this.handleDrawerToggle} name='Dashboard'/>

                        <main>
                            <div className="dashCointainer">
                                
                                <Grid container spacing={16}>
                                    <Grid item sm={12} xs={12}>
                                        
                                        <div className="dashBlockContent">
                                            <Typography className="dashBlockTitle" variant="title">
                                                Welcome to the dashboard
                                            </Typography>
                                            <IconButton
                                                className="dashToolbarButton"
                                                color="inherit"
                                                aria-label="Menu"
                                                onClick={this.testDelete}
                                            >
                                                <Icon className="material-icons">menu</Icon>
                                            </IconButton>
                                            <Typography className="dashBlockSub" variant="subheading">
                                                Please fill the Form
                                            </Typography>
                                        </div>

                                    </Grid>
                                </Grid>

                            </div>
                        </main>

                    </div>

                </div>
            </div>
        )
    }
    
};

export default Dashboard;