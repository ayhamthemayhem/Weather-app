import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
