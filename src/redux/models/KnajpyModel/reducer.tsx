import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { KnajpyModelStateInterface, KnajpyModelStateFields, KnajpyActions } from './types';
import { PayloadAction } from 'types/reduxTypes';
import get from 'lodash/get';

const initialState: KnajpyModelStateInterface = fromJS({
  [KnajpyModelStateFields.KNAJPY]: {
    // id: { name: 'text' }
  }
});

const KnajpyReducer: Reducer<KnajpyModelStateInterface, PayloadAction> = (
  state: KnajpyModelStateInterface = initialState, action: PayloadAction
): KnajpyModelStateInterface => {

  switch (action.type) {
    case KnajpyActions.GET_KNAJPY_SUCCESS: {

      const knajpy = get(action, ['payload', 'knajpy'], null);

      console.log(knajpy);

      return state
        .set(KnajpyModelStateFields.KNAJPY, knajpy);
    }

    case KnajpyActions.GET_KNAJPA: {

      const knajpaId = get(action, ['payload', 'id'], null);

      console.log("KnajpaID: " + knajpaId);

      return state.get(KnajpyModelStateFields.KNAJPY, knajpaId);
    }
    
    case KnajpyActions.ADD_KNAJPA_SUCCESS: {

      const knajpy = get(action, ['payload', 'knajpy'], null);

      console.log(knajpy);

      return state
        .set(KnajpyModelStateFields.KNAJPY, knajpy);
    }
    

    default: {
      return state;
    }
  }
};

export default KnajpyReducer;
