import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';

import { ICounterState } from '../../app.state'

@Injectable()
export class CounterActions {

  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  constructor(private ngRedux: NgRedux<ICounterState>) {}

  increment(): void {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT});
  }

  decrement(): void {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT });
  }
}
