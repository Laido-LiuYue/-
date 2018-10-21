import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  course;
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
        this.course=data;
    });
  }
}
