import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';

export type RootState = Readonly<{
  router: RouterState;
}>;

export const rootReducer = combineReducers<RootState>({}
);