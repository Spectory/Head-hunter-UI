
export interface ICounterState {
    count: number
}
export const INITIAL_STATE_COUNTER = {
    count: 0
}

export interface IUsersState {
  names: string[]
}
export const INITIAL_STATE_USER = {
    names: []
}

export interface IAppState {
  counter: ICounterState;
  users: IUsersState
  router?: any;
}
export const INITIAL_STATE: IAppState = {
  counter: INITIAL_STATE_COUNTER,
  users: INITIAL_STATE_USER
};
