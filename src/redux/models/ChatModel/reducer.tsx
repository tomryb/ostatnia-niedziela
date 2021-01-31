import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { ChatModelStateInterface, ChatModelStateFields, ChatActions } from './types';
import { PayloadAction } from 'types/reduxTypes';

const initialState: ChatModelStateInterface = fromJS({
  [ChatModelStateFields.IS_CHAT_WORKING]: null,

  messages: {},
  knajpyMessages: {},

});

const ChatReducer: Reducer<ChatModelStateInterface, PayloadAction> = (
  state: ChatModelStateInterface = initialState, action: PayloadAction
): ChatModelStateInterface => {

  switch (action.type) {
    case ChatActions.ADD_MESSAGE_SUCCESS: {

      return state
        .setIn(['messages', action.payload.messageId], action.payload.message);

      // return state
      //   .set(ChatModelStateFields.IS_CHAT_WORKING, true);
    }

    case ChatActions.ADD_MESSAGE_FAILURE: {
      return state
        .set(ChatModelStateFields.IS_CHAT_WORKING, false);
    }

    default: {
      return state;
    }
  }
};

export default ChatReducer;
