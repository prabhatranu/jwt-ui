import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import shadows from 'material-ui/styles/shadows';

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#801a7a',
      main: '#801a7a',
      dark: '#801a7a',
      contrastText: '#fff'
    },
    secondary: {
      light: '#3dafd2',
      main: '#1589ac',
      dark: '#025a75',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiInputLabel: {
      shrink: {
        transform: 'scale(0.95)'
      }
    },
    MuiButton: {
      raised: {
        boxShadow: 'none'
      }
    },
    MuiFormHelperText: {
      root: {
        color: 'red'
      }
    },
    MuiListItemIcon: {
      root: {
        marginRight: '0'
      }
    }
  }
});

export default Theme;
