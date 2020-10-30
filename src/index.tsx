import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { rootStore } from 'services';

import { Provider as StoreProvider } from 'react-redux';
import { history } from 'redux/rootStore';
import { ConnectedRouter } from 'connected-react-router/immutable';

import './index.scss';

import App from './components/App';

import * as serviceWorker from './worker/serviceWorker';
import * as interfaces from 'services/interfaces';

import 'assets/icons';
import { AnyDict } from 'types';

// declare custom fields in window
declare global {
  interface Window {
    __config: interfaces.ConfigInterface;
    gapi: AnyDict;
  }
}

const rootEl = document.getElementById('root');

function Component() {
  return (
    <StoreProvider store={rootStore}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectedRouter>
    </StoreProvider>
  );
}

ReactDOM.render(
  <Component />
  , rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const HOT_RELOAD = 'hot_reload:';

// Enable react hot reload
if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log(`${HOT_RELOAD} start`);
    ReactDOM.render(
      <Component />,
      rootEl,
      () => { console.log(`${HOT_RELOAD} end`); }
    );
  });
}

if (process.env.NODE_ENV === 'development') {
  console.log('development');
}
