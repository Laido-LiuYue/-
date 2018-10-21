import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    let a;
    console
   }
  set(key,value){
    return localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
}
