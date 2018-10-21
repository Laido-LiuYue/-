import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  course;
  ngOnInit() {
    this.http.get('/api/community').subscribe((data)=>{
      this.course=data;
  })
  }

}
