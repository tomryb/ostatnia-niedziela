import { Map } from 'immutable';

export type Id = string;

export type DoNothingFunction = () => void;

export type MaybeUndefined<T> = T | undefined;
export type Maybe<T> = T | null;
export type Dict<T> = { [_: string]: T };
export type AnyDict = Dict<any>;

export type AnyMap = Map<string, any>;
