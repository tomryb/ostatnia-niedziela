import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { ChatModelStateInterface, ChatModelStateFields, ChatActions } from './types';
import { PayloadAction } from 'types/reduxTypes';

const initialState: ChatModelStateInterface = fromJS({
  [ChatModelStateFields.IS_CHAT_WORKING]: null
});

const ChatReducer: Reducer<ChatModelStateInterface, PayloadAction> = (
  state: ChatModelStateInterface = initialState, action: PayloadAction
): ChatModelStateInterface => {

  switch (action.type) {
    case ChatActions.SET_IS_CHAT_WORKING_SUCCESS: {
      return state
        .set(ChatModelStateFields.IS_CHAT_WORKING, true);
    }

    case ChatActions.SET_IS_CHAT_WORKING_FAILURE: {
      return state
        .set(ChatModelStateFields.IS_CHAT_WORKING, false);
    }

    default: {
      return state;
    }
  }
};

export default ChatReducer;
