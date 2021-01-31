import { domain } from 'redux/models/TemplateModel';
import { createSelector } from 'reselect';
import { Maybe } from 'types';
import { ChatModelStateFields, ChatModelStateInterface } from './types';

export const selectChatDomain = (state) => state.get(domain) as ChatModelStateInterface;

export const selectIsTemplateWorking = createSelector(
  selectChatDomain,
  (domain) => domain.get(ChatModelStateFields.IS_CHAT_WORKING) as Maybe<boolean>
);
