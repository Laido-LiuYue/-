import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		var liNodes = document.getElementsByTagName('li');
		window.onload =function(){
			for (var j=0; j<liNodes.length; j++)
			{
				liNodes[j].onmouseover = function(){
					this.className = "subMenuShow ";
				}
				liNodes[j].onmouseout = function(){
					this.className = "";
				}
			}
		}
	}
}
