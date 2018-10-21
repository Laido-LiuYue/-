import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {filter,map} from 'rxjs/Operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;
  // num=1;
  // chang(event){
  //   this.num=event.target.value;
  // }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    //   this.http.get('/api/course/'+this.courseId).pipe(map(data=>{
    //     return data.id==3;
    //   })).pipe(filter(data=>{
    //     return true;
    //   })).subscribe((data)=>{
    //   this.course=data;
    // })
    this.http.get('/api/course').subscribe((data)=>{
      this.course=data;
  });
  }
}