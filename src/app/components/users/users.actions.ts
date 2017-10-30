import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Http, Response } from '@angular/http'
import { Action } from 'redux';
import * as _ from 'lodash'

import { IUsersState } from '../../app.state'

export interface IUsersAction extends Action {
  names?: string[]
}

@Injectable()
export class UsersActions {

  static FETCH_USERS         = 'fetch users';
  static FETCH_USERS_SUCCESS = 'fetch users success';
  static FETCH_USERS_FAIL    = 'fetch users fail';

  constructor(private ngRedux: NgRedux<IUsersState>, public http: Http) {}

  fetchUsers(): void {
    this.ngRedux.dispatch({type: UsersActions.FETCH_USERS})
    this.fetchUsersAjax()
  }

  fetchtUsersSuccess(usersList: string[]): void {
    this.ngRedux.dispatch({
      type: UsersActions.FETCH_USERS_SUCCESS,
      names: usersList
    })
  }

  fetchUsersFail(): void {
    this.ngRedux.dispatch({type: UsersActions.FETCH_USERS_FAIL})
  }

  fetchUsersAjax(): void {
    this.http.request('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: Response ) => {
        const objs: any[] = res.json()
        const names: string[] =
          _.map(objs, (e) => {
            return e.name
          })
        this.fetchtUsersSuccess(names)
      }, (err: any) => {
        console.error('Failed to get users')
        this.fetchUsersFail()
      })
  }

}
