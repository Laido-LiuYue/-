import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService} from './services/common.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TaskComponent } from './components/task/task.component';
import { TongComponent } from './components/tong/tong.component';
import { ClassComponent } from './components/class/class.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { componentFactoryName } from '@angular/compiler';
import { APipe } from './a.pipe';
import { CoursetailComponent } from './components/coursetail/coursetail.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';



@NgModule({
  declarations: [
     AppComponent,
     ChildComponent,
     HeaderComponent,
     HomeComponent,
     TongbuComponent,
     CourseComponent,
     CommunityComponent,
     TongbudetailComponent,
     TaskComponent,
     TongComponent,
     ClassComponent,
     QieshuoComponent,
     APipe,
    CoursetailComponent,
    TongzhiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:  HomeComponent,children:[
        {path:'task',component:TaskComponent},
        {path:'tong',component:TongComponent},
        {path:'class',component:ClassComponent},
        {path:'qieshuo',component:QieshuoComponent},
        {path:'tongzhi',component:TongzhiComponent},
        {path:'',redirectTo:'task',pathMatch:'full'},
      ]},
      {path:'tongbu',component: TongbuComponent},
      {path:'tongbu/:courseId',component: TongbudetailComponent},
      {path:'course',component:  CourseComponent},
      {path:'course/:courseId',component: CoursetailComponent},
      {path:'community',component: CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:CommunityComponent},
    ]),
    HttpClientModule
  ],
  providers: [
    {provide:CommonService,useClass:CommonService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
