import { Map } from 'immutable';
import { Maybe } from 'types';

export enum KnajpyModelStateFields {
  KNAJPY = 'KNAJPY'
}

export type Knajpa = {
  id: number;
  shopName: string;
  shopUrl?: string;
  shopPicUrl?: string;
  address?: string;
  deadlineTime: number;
  isTakeaway: boolean;
  minOrderAmount: number;
}

export interface KnajpyModelStateInterface extends Map<string, any>  {
  [KnajpyModelStateFields.KNAJPY]: Map<string, Knajpa>;
}

export enum KnajpyActions {
    GET_KNAJPY = 'GET_KNAJPY',
    GET_KNAJPA = 'GET_KNAJPA',
    GET_KNAJPY_SUCCESS = 'GET_KNAJPY_SUCCESS',
    ADD_KNAJPA = 'ADD_KNAJPA',
    ADD_KNAJPA_SUCCESS = 'ADD_KNAJPA_SUCCESS'
}
