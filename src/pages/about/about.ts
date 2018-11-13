import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tab1Root = HomePage;
  // @ViewChild(Slides) slides:Slides;
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['客厅','卧室','餐厅','书房','门厅'];
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  // change(){
  //   console.log( this.slides.getActiveIndex() );
  // }
}
