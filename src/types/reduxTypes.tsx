
/* This is gentle approach without typing payload and type
* If more typecheck is needed, use typesafe-actions PayloadAction etc.
*/

export type PayloadAction<T = any> = {
  type: string;
  payload: T;
};

export type PartialPayloadAction<T = any> = Partial<PayloadAction<T>>;
