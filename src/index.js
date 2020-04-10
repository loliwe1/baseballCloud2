import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthGuard from './components/AuthGuard/AuthGuard';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AuthGuard>
      <App />
    </AuthGuard>
  </Provider>, document.getElementById('root'),
);
serviceWorker.unregister();
