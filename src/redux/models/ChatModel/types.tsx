import { Map } from 'immutable';
import { Maybe } from 'types';

export enum ChatModelStateFields {
  IS_CHAT_WORKING = 'isChatWorking'
}

export interface ChatModelStateInterface extends Map<string, any>  {
  [ChatModelStateFields.IS_CHAT_WORKING]: Maybe<boolean>;
}

export enum ChatActions {
  ADD_MESSAGE = 'ADD_MESSAGE',
  ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS',
  ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE',
}
