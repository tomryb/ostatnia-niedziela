import { Map } from 'immutable';
import { Maybe } from 'types';

export enum ChatModelStateFields {
  IS_CHAT_WORKING = 'isChatWorking'
}

export interface ChatModelStateInterface extends Map<string, any>  {
  [ChatModelStateFields.IS_CHAT_WORKING]: Maybe<boolean>;
}

export enum ChatActions {
  SET_IS_CHAT_WORKING = 'SET_IS_CHAT_WORKING',
  SET_IS_CHAT_WORKING_SUCCESS = 'SET_IS_CHAT_WORKING_SUCCESS',
  SET_IS_CHAT_WORKING_FAILURE = 'SET_IS_CHAT_WORKING_FAILURE',
}
