import { Map } from 'immutable';
import { Maybe } from 'types';

export enum TemplateModelStateFields {
  IS_TEMPLATE_WORKING = 'isTemplateWorking'
}

export interface TemplateModelStateInterface extends Map<string, any>  {
  [TemplateModelStateFields.IS_TEMPLATE_WORKING]: Maybe<boolean>;
}

export enum TemplateActions {
  SET_IS_TEMPLATE_WORKING = 'SET_IS_TEMPLATE_WORKING',
  SET_IS_TEMPLATE_WORKING_SUCCESS = 'SET_IS_TEMPLATE_WORKING_SUCCESS',
  SET_IS_TEMPLATE_WORKING_FAILURE = 'SET_IS_TEMPLATE_WORKING_FAILURE',
}
