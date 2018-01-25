import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import routerReducer from '@Store/reducers/routerReducer';

export type RootState = Readonly<{
  router: RouterState;
}>;

export const rootReducer = combineReducers<RootState>({
  router: routerReducer
  }
);