import { fork, all } from 'redux-saga/effects';
import { ConfigInterface } from 'services/interfaces';

import { TemplateModelSagas } from 'redux/models/TemplateModel/sagas';
import { KnajpyModelSagas } from 'redux/models/KnajpyModel/sagas';
import { ChatModelSagas } from 'redux/models/ChatModel/sagas';

export default (config: ConfigInterface) => (function* rootSaga() {
  const sagas = [
    // ...ModelSagas
    ...TemplateModelSagas,
    ...KnajpyModelSagas,
    ...ChatModelSagas
  ];

  yield all(sagas.map(fork));
});
