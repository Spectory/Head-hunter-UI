import { combineReducers, Reducer } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { counterReducer } from './components/counter/counter.reducer';
import { usersReducer } from './components/users/users.reducer';
import { IAppState } from './app.state'


export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  counter: counterReducer,
  users: usersReducer,
  router: routerReducer,
});

