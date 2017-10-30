import { IUsersAction, UsersActions } from './users.actions';
import { IUsersState } from '../../app.state'


export function usersReducer(lastState: IUsersState, action: IUsersAction): IUsersState {
  if (lastState === undefined) { return {names: []}}
  switch (action.type) {
    case UsersActions.FETCH_USERS: return lastState;
    case UsersActions.FETCH_USERS_SUCCESS:
      return Object.assign({}, lastState, {names: action.names});
    default:
      return lastState;
  }
}
