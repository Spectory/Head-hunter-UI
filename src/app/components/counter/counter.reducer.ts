import { Action } from 'redux';
import { CounterActions } from './counter.actions';
import { ICounterState } from '../../app.state'


export function counterReducer(lastState: ICounterState, action: Action): ICounterState {
  if (lastState === undefined) { return {count: 0}}

  switch (action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  }
  return lastState;
}
