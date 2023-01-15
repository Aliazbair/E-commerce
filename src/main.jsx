import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const ProUl = 'https://hatota-dev.com/api/graphql';

const client = new ApolloClient({
  uri: ProUl || 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache(),
});

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
