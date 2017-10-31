import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { UsersActions } from './users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  name = 'UsersComponent';

  @select(state => state.users.names) readonly users$: Observable<number>;

  constructor(private actions: UsersActions) {
    console.log('UsersComponent inited');
  }

  ngOnInit() {}
}
