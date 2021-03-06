/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import { domain as TemplateDomain } from 'redux/models/TemplateModel';
import TemplateReducer from 'redux/models/TemplateModel/reducer';

import { domain as KnajpyDomain } from 'redux/models/KnajpyModel';
import KnajpyReducer from 'redux/models/KnajpyModel/reducer';

import { domain as ChatDomain } from 'redux/models/ChatModel';
import ChatReducer from 'redux/models/ChatModel/reducer';

import { ConfigInterface } from 'services/interfaces';

export default function (asyncReducers, history, config: ConfigInterface) {
  const reducers = {
    // [ModelDomain]: ModelReducer
    [TemplateDomain]: TemplateReducer,
    [KnajpyDomain]: KnajpyReducer,
    [ChatDomain]: ChatReducer,

    ...asyncReducers,
  };

  reducers.router = connectRouter(history);

  return combineReducers(reducers);
}
