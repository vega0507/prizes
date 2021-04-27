import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import theme from './theme/theme';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
    <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
