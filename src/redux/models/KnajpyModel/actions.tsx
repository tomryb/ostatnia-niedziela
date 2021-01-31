import { action } from 'typesafe-actions';
import { Knajpa, KnajpyActions } from 'redux/models/KnajpyModel/types';

export const getKnajpaDetails = (
  id: string
) => 
  action(KnajpyActions.GET_KNAJPA_DETAILS, { id });

export const getKnajpaDetailsSuccess = (
  knajpa: Knajpa
) =>
  action(KnajpyActions.GET_KNAJPA_DETAILS_SUCCESS, { knajpa });

export const getKnajpaDetailsFailure = () =>
  action(KnajpyActions.GET_KNAJPA_DETAILS_FAILURE);
