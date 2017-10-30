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

  constructor(private ajaxService: AjaxService) {
    this.cache = {};
    this.getUsers = this.ajaxGetWithCache('getUsers', 'https://jsonplaceholder.typicode.com/users');
  }

///////////////////////////// private methods /////////////////////////

  /*
   * Return a function that will call the given API if result is not already in cache
   * Cache key is created from the name of the calling function and a concatenation
   * of all of the parameters.
   */
  private ajaxGetWithCache(callName: string, url: string) {
    // console.log('3');
    return (params: {[key: string]: any}, successFunc: (data: any) => void) => {
      const cachekey = this.makeCacheKey(callName, params)
      const data = this.cache[cachekey]
      if (data !== undefined) {
        successFunc( data );
        return;
      }

      this.ajaxService.get(url, params,
        (res: any) => {
          // console.log('Received response: ', res, ' for url: ', url)
          const ret = JSON.parse( res['_body']);
          this.cache[cachekey] = ret;
          successFunc(ret);
        })
    }
  }

  private makeCacheKey = (base: string, params: {[key: string]: any}): string => {
    const cachekey =
        _.reduce(params,
                 (newCachKey, propVal, propName) => {
                   return `${newCachKey}-${propName}-${propVal}`
                 },
                 base)
    return cachekey
  }
}


