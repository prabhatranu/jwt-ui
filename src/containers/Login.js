import React, { Component, PropTypes } from 'react';
import '../App.css';
import '../Animate.css';

import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import CSSTransition from 'react-transition-group/CSSTransition';
import LoginService from '../service/LoginService';
import UserStore from '../store/UserStore';
import TokenStore from '../store/TokenStore';
import validator from '../util/Validatore';

const loginService = new LoginService();


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarsOpen: false,
      snackbarMessage: '',
      login: {
        email: '',
        password: '',
        name: '',
        userId: ''
      },
      switchNew: true,
      forgot: false
    };
  }

  handleChange = name => event => {
    this.setState({
      login: { ...this.state.login, [name]: event.target.value }
    });
  };

  handleChangeNew = () => {
    this.setState({ switchNew: !this.state.switchNew });
  };

  handleForgotPassword = () => {
    this.setState({ forgot: !this.state.forgot });
  };



  handleEmailAndPassword = () => {
    this.setState({ snackbarMessage: 'Please Enter Email And Password' });
    this.setState({ showSnackbar: true });
  };

  handleEmail = () => {
    this.setState({ snackbarMessage: 'Please Enter Email' });
    this.setState({ showSnackbar: true });
  };

  handlePassword = () => {
    this.setState({ snackbarMessage: 'Please Enter Password' });
    this.setState({ showSnackbar: true });
  };

  handleError = () => {
    this.setState({ snackbarMessage: 'Incorrect UserName / Password' });
    this.setState({ showSnackbar: true });
  };

  closeSnackbar = () => {
    this.setState({ showSnackbar: false });
    this.setState({ snackbarMessage: '' });
  };

  login = () => {
    let { login } = this.state,
      _self = this;

 console.log(login.userId+login.password )

    if (validator.isEmpty(login)) {
      _self.handleEmailAndPassword();
    } else if (login.userId === '') {
      _self.handleEmail();
    } else if (login.passWord === '') {
      _self.handlePassword();
    } else {

      loginService.login(login, (flag, data) => {
        if (flag) {
        
          UserStore.setUser(data.user);
          TokenStore.setToken(data.Token);
              // Storing the user details into local storage
          window.location.reload();
          this.props.history.push('/dashboard');
        }
        else {
          _self.handleError();
        }
      });
    }
  };

  render() {


    return (
      <div>
        <div className="login_logo">{/*<img src={Logo} />*/}</div>

        <div className="login_wrapper">
          <div className="login_box animated fadeInRight">
            <div className="login_in">
              <Typography
                className="login_box_header"
                variant="headline"
                component="h3"
              >
                {this.state.switchNew ? 'Login' : 'New User'}
              </Typography>

              {this.state.switchNew ? (
                <form autoComplete="off">
                  <TextField
                    id="login_email"
                    label="Email"
                    fullWidth
                    type="email"
                    placeholder="E.g. jhoneDoe@gmail.com"
                    value={this.state.email}
                    onChange={this.handleChange('userId')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <TextField
                    id="login_password"
                    label="Password"
                    fullWidth
                    type="password"
                    placeholder="*********"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <Button className="themeButtonBold" color="primary" onClick = {this.login}>
                    Login
                  </Button>
                         
                </form>
          
              ) : (
                <form autoComplete="off">
                  <TextField
                    id="register_Name"
                    label="Name"
                    fullWidth
                    type="text"
                    placeholder="E.g. Jhone Doe"
                    value={this.state.email}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <TextField
                    id="register_email"
                    label="Email"
                    fullWidth
                    type="email"
                    placeholder="E.g. jhoneDoe@gmail.com"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <TextField
                    id="register_password"
                    label="Password"
                    fullWidth
                    type="password"
                    placeholder="*********"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <TextField
                    id="register_password_re"
                    label="Re Password"
                    fullWidth
                    type="password"
                    placeholder="*********"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    // helperText="Erroe Mgs"
                  />

                  <Button className="themeButtonBold" color="primary">
                    Register
                  </Button>
                </form>
              )}

              <button className="login_Link" onClick={this.handleChangeNew}>
                {this.state.switchNew ? 'New User, Register' : 'Back to Login'}
              </button>
              <button
                className="login_Link"
                onClick={this.handleForgotPassword}
              >
                Forget Password
              </button>
            </div>
          </div>
        </div>

        <CSSTransition
          in={this.state.forgot}
          unmountOnExit
          classNames={{
            enter: 'animated',
            enterActive: 'slideInUp',
            exit: 'animated',
            exitActive: 'slideOutDown'
          }}
        >
          <div className="ForgotPassword">
            <div className="ForgotPasswordBox">
              <Typography
                className="login_box_header"
                variant="headline"
                component="h3"
              >
                Forgot Password
              </Typography>
              <Typography
                className="login_box_header_sub"
                variant="body2"
                component="p"
              >
                Don't worry, We got you covered
              </Typography>

              <form autoComplete="off">
                <TextField
                  id="login_name"
                  label="Enter Registerd Email"
                  fullWidth
                  type="email"
                  placeholder="E.g. jhoneDoe@gmail.com"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  // helperText="Erroe Mgs"
                />

                <Button className="themeButtonBold" color="primary">
                  Submit
                </Button>
                <Button
                  className="themeButtonBlank"
                  onClick={this.handleForgotPassword}
                >
                  Cancel
                </Button>
              </form>
                  
            </div>
          </div>
        </CSSTransition>
         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={this.state.showSnackbar}
            onClose={this.closeSnackbar}
            autoHideDuration={3000}
            SnackbarContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.snackbarMessage}</span>}
          />
      </div>
    );
  }
}

export default Login;
