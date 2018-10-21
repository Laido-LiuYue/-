import { Component, OnInit, Input ,EventEmitter,Output,SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    
constructor(){ }
 ngOnInit(){
  
  }
  @Input() arr;
  @Output() delIndex= new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  // index=0;
  // log(msg){
  //   console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  // }
  // constructor(){
  //   // this.log('construct');
  //  }
//   ngOnChanges(changes:SimpleChanges):void{
//     console.log(changes);
//     for(let item in changes){
//       console.log(changes[item].currentValue);
//       for(let i in changes[item]){
//         console.log(`属性名${i},属性值${changes[item][i]}`);
//       }
//   }
// }

  // ngDoCheck ( ){
  //   this.log('ngDoCheck');
  // }
  // ngAftrViewInit():void{
  //   this.log('ngAftrViewInit');
  // }
  // ngAfterContentInit(){
  //   this.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked(){
  //   this.log('ngAfterContentChecked');
  // }
  // ngAfterViewChecked(){
  //   this.log('ngAfterViewChecked');
  // }
}
 

// <!-- <ng-content></ng-content> -->
// <h2>
//     已经完成<span>{{counter}}</span>
// </h2>
// <ul>
//   <ng-container *ngFor="let item of arr;let i = index;">
//     <li *ngIf="item.done" style="list-style:none">
//         <input (click)="change(i)" type="checkbox">
//         {{item.title}}
//         <button (click)="del(i)">删除</button>
//     </li>
// </ng-container>
// </ul>

// add(eve){
//   this.addEvent.emit(eve)
// }


// <app-child4 [arr]="arr"></app-child4>
// add(eve){
//   this.arr.push({title:eve,done:false}); 
//   this.local.set("list",JSON.stringify(this.arr));
// }