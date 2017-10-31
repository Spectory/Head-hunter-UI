import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import * as _ from 'lodash'

import { IUsersState } from '../../app.state'
import { DataService } from '../../services/data.service'

export interface IUsersAction extends Action {
  names?: string[]
}

@Injectable()
export class UsersActions {

  static FETCH_USERS         = 'fetch users';
  static FETCH_USERS_SUCCESS = 'fetch users success';

  constructor(private ngRedux: NgRedux<IUsersState>, private ds: DataService) {}

  fetchUsers(): void {
    this.ngRedux.dispatch({type: UsersActions.FETCH_USERS});
    this.ds.getUsers({}, (users) => this.fetchtUsersSuccess(users));
  }

  fetchtUsersSuccess(usersList: string[]): void {
    this.ngRedux.dispatch({
      type: UsersActions.FETCH_USERS_SUCCESS,
      names: usersList
    })
  }
}
