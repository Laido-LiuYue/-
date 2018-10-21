import { Component } from '@angular/core';
import { NgIf } from '@angular/common/src/directives/ng_if';
import {CommonService} from './services/common.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private a=100;
  // public b=200;
  // title:string='hello world';
  // fun(){
  //   this.title='hello angular';
  // }
  // txt:string;
  // del(idx:number){
  //   // console.log(idx);
  //   this.arr.splice(idx,1);
  // }
//   txt:string;
//   arr1:string[]=[];
//   arr2:string[]=[];
//   // 代码添加到正在进行
// fun(e){
//       if(e.keyCode==13){
//         this.arr1.push(this.txt);
//       }  
//   }
//   title1:string='正在进行';
//   // 代码添加到已完成
//   f1(eve,i){
//     this.arr2.push(this.txt);
//     this.arr1.splice(i,1);
//   }
//   del1(idx){
//     this.arr1.splice(idx,1);
//   }
//   title2:string='已经完成';
//   // 代码添加到正在进行
//   f2(even,d){
//     this.arr1.push(this.txt);
//     this.arr2.splice(d,1);
//   }
//   del2(idx){
//     this.arr2.splice(idx,1);
//   }


// txt:string;
// 方法一
// arr:string[]=[];//一个变量不仅仅需要声明，还需要赋值，空值即可
// arr1:string[]=[];
// getValue(e){
//   if(e.keyCode==13){
//     this.arr.push(this.txt);
//     this.txt=' '
//   }
// }
// del(i){
//   this.arr.splice(i,1)
// }
// change(idx){
//   this.arr1.push(this.arr[idx]);
//   // this.arr1.push(ele[0]);
//   this.arr.splice(idx,1);
// }
// return(idx){
//   this.arr.push(this.arr1[idx]);
//   // this.arr1.push(ele[0]);
//   this.arr1.splice(idx,1);
// }


// // 方法二
// txt:string;
// counter:number=0;
// arr:Object[]=[];
// // arr:string[]=[];//一个变量不仅仅需要声明，还需要赋值，空值即可
// // arr1:string[]=[];
// getValue(e){
//   if(e.keyCode==13){
//     this.arr.push({title:this.txt,done:false});
//     this.txt=' '
//     this.count();
//   }
// }
// count(){
//   this.counter=0;
//   this.arr.forEach((value,index)=>{
//       if(value.done){
//         this.counter++;
//       }
//   });
// }
// del(i){
//   this.arr.splice(i,1)
//   this.count();
// }
// change(idx){
//   this.arr[idx].done=! this.arr[idx].done;
//   this.count();
// }
// }



// 声明类
// export class Msg{
//   constructor(public title:string,public done:boolean){

//   }
// }
// 上面的object就可以直接写成Msg
// 下面的getValue中的push就可以写成 new Msg(this.txt,false)  进阶中的
}                
