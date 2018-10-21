import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tong',
  templateUrl: './tong.component.html',
  styleUrls: ['./tong.component.css']
})
export class TongComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  course;
  ngOnInit() {
    // this.http.get('/api/course').subscribe((data)=>{
    //   this.course=data;
    // });
  }

}
