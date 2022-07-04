import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getItem(key:string){
    return JSON.parse(sessionStorage.getItem(key) || '')
  }
  setItem(key:string,item:any){
    sessionStorage.setItem(key,JSON.stringify(item))
  }
}
