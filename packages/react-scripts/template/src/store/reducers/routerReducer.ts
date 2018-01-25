import { RootAction } from '@Store/actions';
import { RouterState } from 'connected-react-router';
import initialState from '@Store/reducers/initialState';

export default function routerReducer(state: RouterState = initialState.router, action: RootAction) {
  return state;
}