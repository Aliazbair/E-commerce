import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
const ProUl = 'https://hatota-dev.com/api/graphql';

const client = new ApolloClient({
  uri: ProUl,
  // uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache(),
});

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </PersistGate>
  </Provider>
);
