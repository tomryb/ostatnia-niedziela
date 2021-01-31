import { Map } from 'immutable';
import { Maybe } from 'types';

export enum KnajpyModelStateFields {
  KNAJPA_DETAILS = 'KNAJPA_DETAILS'
}

export type Knajpa = {
  id: string;
  name: string;
}

export interface KnajpyModelStateInterface extends Map<string, any>  {
  [KnajpyModelStateFields.KNAJPA_DETAILS]: Map<string, Knajpa>;
}

export enum KnajpyActions {
  GET_KNAJPA_DETAILS = 'GET_KNAJPA_DETAILS',
  GET_KNAJPA_DETAILS_SUCCESS = 'GET_KNAJPA_DETAILS_SUCCESS',
  GET_KNAJPA_DETAILS_FAILURE = 'GET_KNAJPA_DETAILS_FAILURE',
}
