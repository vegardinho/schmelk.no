import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: 'Olopus, Gochi Hand',
  },

  palette: {
    primary: {
      light: '#c6582d',
      main: '#8f2901',
      dark: '#5c0000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffcb8b',
      main: '#ff9a5c',
      dark: '#c86b2f',
      contrastText: '#000000',
    },
  },

  link: {
    textDecoration: 'none',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router forceRefresh={false}>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
