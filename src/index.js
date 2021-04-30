import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const componseEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers,componseEnhancers());

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <Router>
    <App />
    </Router>
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
