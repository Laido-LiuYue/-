import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tab1Root = HomePage;
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  // change(){
  //   console.log( this.slides.getActiveIndex() );
  // }
}
