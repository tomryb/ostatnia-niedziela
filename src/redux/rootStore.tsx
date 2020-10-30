import { createStore, applyMiddleware, Middleware, AnyAction, Store } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { composeWithDevTools } from 'remote-redux-devtools';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory, History } from 'history';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';
import { ConfigInterface } from 'services/interfaces';

// import SagaLogger from 'utils/SagaLogger'
// import SagaMonitor from 'utils/SagaMonitor'

const sagaMiddleware = createSagaMiddleware({}); // sagaMonitor: SagaLogger,

export const history: History = createBrowserHistory();

export default function (
  initialState = {},
  config: ConfigInterface
): Store<unknown, AnyAction> {

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const rootSaga = require('./rootSaga').default(config);
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const middlewares: Middleware[] = [sagaMiddleware];

  middlewares.push(routerMiddleware(history));

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = typeof window === 'object' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : composeWithDevTools;

  const reducer = rootReducer({}, history, config);

  const store = createStore(
    enableBatching(reducer),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store['runSaga'] = sagaMiddleware.run;
  store['asyncReducers'] = {};
  store['close'] = () => store.dispatch(END);

  store['runSaga'](rootSaga);
  // const currentSagas = store.runSaga(rootSaga);

  // TODO HMR for reducers
  // TODO HMR for sagas

  return store;
}
