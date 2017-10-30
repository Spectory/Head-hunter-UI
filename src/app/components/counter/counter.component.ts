import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterActions]
})
export class CounterComponent {
  title = 'CounterComponent';
  @select(state => state.counter.count) readonly count$: Observable<number>;

  constructor(private actions: CounterActions) {}

}
