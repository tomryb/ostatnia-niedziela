import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { TemplateModelStateInterface, TemplateModelStateFields, TemplateActions } from './types';
import { PayloadAction } from 'types/reduxTypes';

const initialState: TemplateModelStateInterface = fromJS({
  [TemplateModelStateFields.IS_TEMPLATE_WORKING]: null
});

const TemplateModelReducer: Reducer<TemplateModelStateInterface, PayloadAction> = (
  state: TemplateModelStateInterface = initialState, action: PayloadAction
): TemplateModelStateInterface => {

  switch (action.type) {
    case TemplateActions.SET_IS_TEMPLATE_WORKING_SUCCESS: {
      return state
        .set(TemplateModelStateFields.IS_TEMPLATE_WORKING, true);
    }

    case TemplateActions.SET_IS_TEMPLATE_WORKING_FAILURE: {
      return state
        .set(TemplateModelStateFields.IS_TEMPLATE_WORKING, false);
    }

    default: {
      return state;
    }
  }
};

export default TemplateModelReducer;
