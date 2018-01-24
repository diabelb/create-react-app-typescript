import { getReturnOfExpression } from 'typesafe-actions';

export const allActions = {};

const returnOfActions = Object.values(allActions).map(getReturnOfExpression);
type AppAction = typeof returnOfActions[number];

export type RootAction =
  | AppAction;