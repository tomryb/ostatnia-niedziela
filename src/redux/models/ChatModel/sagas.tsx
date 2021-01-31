import { put, fork, takeEvery, delay } from 'redux-saga/effects';

import get from 'lodash/get';
import { ChatActions } from './types';
import { PartialPayloadAction } from 'types/reduxTypes';
import { addMessageSuccess } from './actions';

export const ChatModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeEvery(ChatActions.ADD_MESSAGE, addMessage);
    });
  }
];

export function* addMessage({ payload }: PartialPayloadAction<{
  text: string,
  knajpaId: string,
}>) {
  try {
    const text = get(payload, 'text', '');
    const knajpaId = get(payload, 'knajpaId', null);
    const messageId = get(payload, 'messageId', null);

    if (knajpaId) {
      console.log('ADD MESSAGE: ' + text + ' TO ' + knajpaId);

      yield delay(2000); // wait 2 seconds

      yield put(addMessageSuccess(messageId, text));
    } else {
      throw new Error('Something went terribly wrong :|');
    }
  } catch (error) {
    console.log('Wild error appeared!', error);
  }
}
