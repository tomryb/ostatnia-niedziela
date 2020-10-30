import { fork, all } from 'redux-saga/effects';
import { ConfigInterface } from 'services/interfaces';

import { TemplateModelSagas } from 'redux/models/TemplateModel/sagas';

export default (config: ConfigInterface) => (function* rootSaga() {
  const sagas = [
    // ...ModelSagas
    ...TemplateModelSagas,
  ];

  yield all(sagas.map(fork));
});
