import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router'

// import * as Consts from '../constants'
import * as _ from 'lodash'

@Injectable()
export class AjaxService {

  private static JWT_TOKEN = 'jwtToken'
  private static remoteUrlInited = false;
  private static cachedRemoteUrl = '';

  static formatParams = (p: {[key: string]: any}): {[key: string]: any} => {
    const ret = {}
    _.forIn(p, (v: any, k: string) => {
      if (v instanceof Array) {
        ret[k] = _.reduce(v, (str: string, e: any) => str === '' ? `${e}` : `${str},${e}`, '')
      } else {
        ret[k] = v
      }
    })
    return ret
  }

  static getServerUrl() {
    // NOTE: For devs who work only with linux - this should just be localhost
    // return 'http://dev.spectory.com:3000/';
    return 'https://head-hunter.herokuapp.com/';
  }

  constructor(private http: Http, private router: Router) { }

  private defaultOnError = (err: any) => {
    console.log(err)
    if (err.status === 401) {
      console.log('Got status 401, redirect to login page')
      this.router.navigate(['login'])
    } else if (err.status === 404) {
      console.log('Got status 404 - No route')
    } else if (err.status === 500) {
      console.log('Got status 500 - Server error')
    } else {
      alert('Server is not responding')
      console.error('HTTP request failed with error: ', err)
    }
  }

  /////////////////////// Public /////////////////////////////////////////
  get(partialUrl: string,
    params: {[key: string]: any} = {},
    onSuccess: (res: Response) => any,
    onError?: (err: any) => any ): void {

    const jwt = localStorage.getItem(AjaxService.JWT_TOKEN)
    if (jwt === null) {
      this.router.navigate(['login'])
      return
    }

    let token = null
    try {
      token = JSON.parse(jwt)['auth_token']
    } catch (ex) {
      console.error('Caught exception while trying to login. Try accessing a V3 server')
      console.exception(ex)
    }
    const headers = new Headers({
      'Authorization': 'Bearer ' + token
    });

    const completeUrl = AjaxService.getServerUrl() + partialUrl

    if (onSuccess === undefined || onSuccess === undefined) { throw new Error('Null onSuccess in get()') }
    if (onError === undefined) { onError = this.defaultOnError }

    const formattedParams = AjaxService.formatParams(params)
    this.http.get(completeUrl, {headers: headers, params: formattedParams})
      .subscribe(onSuccess, onError)
  }

  post(partialUrl: string,
      params: { [key: string]: any },
      onSuccess: (res: Response) => any,
      onError?: (err: any) => any): void {

    const jwt = localStorage.getItem(AjaxService.JWT_TOKEN)

    if (jwt === null) {
      this.router.navigate(['login'])
      return
    }

    const token = JSON.parse(jwt)['auth_token']
    const headers = new Headers({
      'Authorization': 'Bearer ' + token
    });

    const completeUrl = AjaxService.getServerUrl() + partialUrl

    if (onSuccess === undefined || onSuccess === undefined) { throw new Error('Null onSuccess in get()') }
    if (onError === undefined) { onError = this.defaultOnError }

    const requestOptions = new RequestOptions({ headers: headers});

    this.http.post(completeUrl, params, requestOptions)
      .subscribe(onSuccess, onError)
  }
}
