import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import client from './config/apolloClient';

import './index.css';
import './styles/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
