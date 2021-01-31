import { action } from 'typesafe-actions';
import { ChatActions } from 'redux/models/ChatModel/types';

export const setIsChatWorking = (
  value: boolean
) =>
  action(ChatActions.SET_IS_CHAT_WORKING, { value });

export const setIsChatWorkingSuccess = () =>
  action(ChatActions.SET_IS_CHAT_WORKING_SUCCESS);

export const setIsChatWorkingFailure = () =>
  action(ChatActions.SET_IS_CHAT_WORKING_FAILURE);
