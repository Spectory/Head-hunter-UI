import { IUsersState, INITIAL_STATE_USER } from '../../app.state'
import { usersReducer } from './users.reducer'
import {UsersActions } from './users.actions';

describe('Add employee action', () =>  {
  const initState: IUsersState = INITIAL_STATE_USER

  it('should add a names list', () => {
    const action = {
      type: UsersActions.FETCH_USERS_SUCCESS,
      names: ['a', 'b']
    }
    const newState = usersReducer(initState, action)
    expect(newState.names.length).toEqual(1)
  })
})
