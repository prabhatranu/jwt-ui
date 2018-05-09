import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { MuiThemeProvider} from 'material-ui/styles';
import {Login, Dashboard} from './containers'
import './App.css';
import UserStore from './store/UserStore';
import theme from './Theme';

const Authorization = (allowedRoles) => (WrappedComponent) => {
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      }
    }
    componentWillMount() {
      let _status = UserStore.isLoggedIn();
      this.setState({ isLoggedIn: _status });
    }
    render() {
      const { isLoggedIn } = this.state;
      if (isLoggedIn) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Login />
      }
    }
  }
}

const isLoggedIn = Authorization(['isLoggedIn']);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} intial={true} />
            <Route exact path="/dashboard" component={isLoggedIn(Dashboard)} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
