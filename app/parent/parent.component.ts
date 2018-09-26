import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { }

  data1=[];
  data2=[];

  funadd1(msg){
    this.data1.push(msg);
    this.local.set('list1',this.data1);
  }

  fundelete1(i){
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
  }

  funadd2(i){
    this.data2.push(this.data1[i]);
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
    this.local.set('list2',this.data2);
  }

  funadd3(j){
    this.data1.push(this.data2[j]);
    this.data2.splice(j,1);
    this.local.set('list1',this.data1);
    this.local.set('list2',this.data2);
  }

  fundelete2(j){
    this.data2.splice(j,1);
    this.local.set('list2',this.data2);
  }
  ngOnInit() {
    if(this.local.get('list1')){
      this.data1=this.local.get('list1').split(',');
    }
    if(this.local.get('list2')){
      this.data2=this.local.get('list2').split(',');
    }
  }
}
