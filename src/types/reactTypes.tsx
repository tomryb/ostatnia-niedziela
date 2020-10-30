/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FocusEvent, ChangeEvent, SyntheticEvent } from 'react';

export type ComposedComponentType = React.ComponentType<any>;

export type FunctionComponent<P> = React.FunctionComponent<P>;

export interface EmptyProps { }
export interface EmptyState { }

export type VoidFunction = () => void;

export type InputEventHandlerFunction =
  (value: string | number, event: Event) => void;
export type InputFocusEventHanderFunction =
  (value: string | number, event: FocusEvent<HTMLInputElement>) => void;
export type InputChangeEventHanderFunction =
  (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
export type InputBlurEventHanderFunction =
  (value: string | number, event: SyntheticEvent<HTMLInputElement>) => void;

export type KeyboardEventHandlerFunction = (event: KeyboardEvent) => void;

export type RenderFunction<T> = (params: T) => JSX.Element;

export type Renderer<T> = (props: T) => JSX.Element | string | null;
