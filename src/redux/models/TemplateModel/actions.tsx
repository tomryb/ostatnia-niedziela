import { action } from 'typesafe-actions';
import { TemplateActions } from 'redux/models/TemplateModel/types';

export const setIsTemplateWorking = (
  value: boolean
) =>
  action(TemplateActions.SET_IS_TEMPLATE_WORKING, { value });

export const setIsTemplateWorkingSuccess = () =>
  action(TemplateActions.SET_IS_TEMPLATE_WORKING_SUCCESS);

export const setIsTemplateWorkingFailure = () =>
  action(TemplateActions.SET_IS_TEMPLATE_WORKING_FAILURE);
