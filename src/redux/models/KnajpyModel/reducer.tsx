import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { KnajpyModelStateInterface, KnajpyModelStateFields, KnajpyActions } from './types';
import { PayloadAction } from 'types/reduxTypes';
import get from 'lodash/get';

const initialState: KnajpyModelStateInterface = fromJS({
  [KnajpyModelStateFields.KNAJPA_DETAILS]: {
    // id: { name: 'text' }
  }
});

const KnajpyReducer: Reducer<KnajpyModelStateInterface, PayloadAction> = (
  state: KnajpyModelStateInterface = initialState, action: PayloadAction
): KnajpyModelStateInterface => {

  switch (action.type) {
    case KnajpyActions.GET_KNAJPA_DETAILS_SUCCESS: {

      const knajpa = get(action, ['payload', 'knajpa'], null);

      console.log(knajpa);

      return state
        .setIn([KnajpyModelStateFields.KNAJPA_DETAILS, knajpa.id], knajpa);
    }

    default: {
      return state;
    }
  }
};

export default KnajpyReducer;
