import { put, fork, takeEvery, delay } from 'redux-saga/effects';
import { Map } from 'immutable';

import get from 'lodash/get';
import { KnajpyActions, Knajpa } from './types';
import { PartialPayloadAction } from 'types/reduxTypes';
import { getKnajpy, getKnajpySuccess, addKnajpa, addKnajpySuccess } from './actions';

export const KnajpyModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeEvery(KnajpyActions.GET_KNAJPY, fetchKnajpy);
      yield takeEvery(KnajpyActions.ADD_KNAJPA, setNewKnajpa);
    });
  }
];

export function* fetchKnajpy({ }: PartialPayloadAction<{
}>) {
  try {

      // const result = yield api.getKnapjaDetails(id);

      const items = Map({
        1: {
          id: 1,
          shopName: 'Rburger',
          address: 'Piękna',
          shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/OO5N055N/logo_465x320.png",
          deadlineTime: 1607867786,
          isTakeaway: true,
          minOrderAmount: 30,    
        },
        2: {
          id: 2,
          shopName: 'PWroc',
          address: 'Racławicka',
          shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/NRN5R5O/logo_465x320.png",
          deadlineTime: 1607867426,
          isTakeaway: true,
          minOrderAmount: 50,
        },
        3: {
          id: 3,
          shopName: 'Sulejman',
          address: 'Zdrowa',
          shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/OR7O0N01/logo_465x320.png",
          deadlineTime: 1607867386,
          isTakeaway: false,
          minOrderAmount: 30,
        },
        4: {
          id: 4,
          shopName: 'PANda',
          address: 'al. Armii Krajowej',
          shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/O0OR55N1/logo_465x320.png",
          deadlineTime: 1607867516,
          isTakeaway: true,
          minOrderAmount: 100,
        },
        5: {
          id: 5,
          shopName: 'pizza express',
          address: 'Krakowska',
          shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/00QQ1511/logo_465x320.png",
          deadlineTime: 1607867606,
          isTakeaway: false,
          minOrderAmount: 10,
        },
      });
      yield put(getKnajpySuccess(items));

  } catch (error) {
    console.log('Wild error appeared!', error);
  } 
}

export function* setNewKnajpa({ payload }: PartialPayloadAction<{
}>) {
  try {
      const knajpa = {
        id: 1,
        shopName: 'Rburger',
        address: 'Piękna',
        shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/OO5N055N/logo_465x320.png",
        deadlineTime: 1607867786,
        isTakeaway: true,
        minOrderAmount: 30,    
      };

      yield put(addKnajpySuccess(knajpa));
      
  } catch (error) {
    console.log('Wild error appeared!', error);
  } 
}
