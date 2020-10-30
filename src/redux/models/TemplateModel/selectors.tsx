import { domain } from 'redux/models/TemplateModel';
import { TemplateModelStateInterface, TemplateModelStateFields } from 'redux/models/TemplateModel/types';
import { createSelector } from 'reselect';
import { Maybe } from 'types';

export const selectTemplateDomain = (state) => state.get(domain) as TemplateModelStateInterface;

export const selectIsTemplateWorking = createSelector(
  selectTemplateDomain,
  (domain) => domain.get(TemplateModelStateFields.IS_TEMPLATE_WORKING) as Maybe<boolean>
);
