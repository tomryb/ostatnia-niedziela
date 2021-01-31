import { put, fork, takeEvery, delay } from 'redux-saga/effects';

import get from 'lodash/get';
import { KnajpyActions } from './types';
import { PartialPayloadAction } from 'types/reduxTypes';
import { getKnajpaDetailsSuccess } from './actions';

export const KnajpyModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeEvery(KnajpyActions.GET_KNAJPA_DETAILS, getKnajpaDetails);
    });
  }
];

export function* getKnajpaDetails({ payload }: PartialPayloadAction<{
  id: string
}>) {
  try {
    const id = get(payload, 'id', null);

    if (id) {
      // const result = yield api.getKnapjaDetails(id);

      yield delay(2000); // wait 2 seconds

      yield put(getKnajpaDetailsSuccess({ id, name: `${Math.random()}` }));
    } else {
      throw new Error('Something went terribly wrong :|'); 
    }
  } catch (error) {
    console.log('Wild error appeared!', error);
    // yield put(getKnajpaDetailsFailure({ text: 'fuck up' }));
  } 
}
