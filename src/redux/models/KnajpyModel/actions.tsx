import { Map } from 'immutable';
import { action } from 'typesafe-actions';
import { Knajpa, KnajpyActions } from 'redux/models/KnajpyModel/types';

export const getKnajpy = () =>
    action(KnajpyActions.GET_KNAJPY)

export const getKnajpySuccess = (
    knajpy: Map<string, Knajpa>
) => action(KnajpyActions.GET_KNAJPY_SUCCESS, { knajpy })

export const getKnajpa = (
    id: string
) =>
    action(KnajpyActions.GET_KNAJPA)


export const addKnajpySuccess = (
    knajpa: Knajpa
) => action(KnajpyActions.ADD_KNAJPA_SUCCESS, { knajpa })

export const addKnajpa = (
    knajpa: Knajpa
) =>
    action(KnajpyActions.ADD_KNAJPA)
