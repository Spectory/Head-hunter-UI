import * as _ from 'lodash'

import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service'

interface ICache {
  [key: string]: any
}

type TgetFunction = (params: {[key: string]: any}, successFunc: (data: any) => void) => void

@Injectable()
export class DataService {
  cache: ICache

  /* API declarations */
  getUsers: TgetFunction;
  getCandidate: TgetFunction;

  constructor(private ajaxService: AjaxService) {
    this.cache = {};
    this.getUsers = this.ajaxGetWithCache('getUsers', '/get_users');
    this.getCandidate = this.ajaxGetWithCache('getCandidate', '/get_candidates');
  }

  private ajaxGetWithCache(callName: string, url: string) {
    return (params: {[key: string]: any}, successFunc: (data: any) => void) => {
      this.ajaxService.get(url, params,
        (res: any) => {
          const ret = JSON.parse(res['_body']);
          successFunc(ret);
        })
    }
  }
}


