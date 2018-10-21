import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { LogService } from 'src/app/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class Common2Service implements CommonService{
  set(key,value){
    this.log.log('set');
    return localStorage.setItem(key,value);
  }
  get(key){
    this.log.log("get这个方法调用了");
    return localStorage.getItem(key);
  }
  constructor(private log:LogService ) { }
}
