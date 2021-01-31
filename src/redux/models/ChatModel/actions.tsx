import { action } from 'typesafe-actions';
import { ChatActions } from 'redux/models/ChatModel/types';

export const addMessage = (
  text: string,
  knajpaId: string
) =>
  action(ChatActions.ADD_MESSAGE, { text, knajpaId });

export const addMessageSuccess = (
  message: string,
  messageID: string
) =>
  action(ChatActions.ADD_MESSAGE_SUCCESS, { messageID, message });

// export const setIsChatWorkingFailure = () =>
//   action(ChatActions.ADD_MESSAGE_FAILURE);
