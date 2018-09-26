import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input() arr1;
  @Input() arr2;
  @Output() clickfun1=new EventEmitter();
  @Output() clickfun2=new EventEmitter();
  @Output() clickfun3=new EventEmitter();
  @Output() clickfun4=new EventEmitter();

  fun1(i){
    this.clickfun1.emit(i);
  }
  fun2(i){
    this.clickfun2.emit(i);
  }
  fun3(i){
    this.clickfun3.emit(i);
  }
  fun4(i){
    this.clickfun4.emit(i);
  }  
}
