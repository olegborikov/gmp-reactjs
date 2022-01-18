import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import configureStore from "./redux/configureStore";

const store = configureStore(window.PRELOADED_STATE);

hydrate(
  <BrowserRouter>
    <App
      store={store}
    />
  </BrowserRouter>,
  document.getElementById('root'));
