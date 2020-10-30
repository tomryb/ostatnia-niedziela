/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import { domain as TemplateDomain } from 'redux/models/TemplateModel';
import TemplateReducer from 'redux/models/TemplateModel/reducer';

import { ConfigInterface } from 'services/interfaces';

export default function (asyncReducers, history, config: ConfigInterface) {
  const reducers = {
    // [ModelDomain]: ModelReducer
    [TemplateDomain]: TemplateReducer,

    ...asyncReducers,
  };

  reducers.router = connectRouter(history);

  return combineReducers(reducers);
}
