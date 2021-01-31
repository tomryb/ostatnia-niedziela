import { put, fork, takeEvery, delay } from 'redux-saga/effects';

import get from 'lodash/get';
import { ChatActions } from './types';
import { PartialPayloadAction } from 'types/reduxTypes';
import { setIsChatWorkingSuccess } from './actions';

export const TemplateModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeEvery(ChatActions.SET_IS_CHAT_WORKING, setIsChatWorking);
    });
  }
];

export function* setIsChatWorking({ payload }: PartialPayloadAction<{
  value: boolean
}>) {
  try {
    const value = get(payload, 'value', false);

    if (value) {
      console.log('SAGA IS ALSO WORKING!');

      yield delay(2000); // wait 2 seconds

      yield put(setIsChatWorkingSuccess());
    } else {
      throw new Error('Something went terribly wrong :|');
    }
  } catch (error) {
    console.log('Wild error appeared!', error);
  }
}
