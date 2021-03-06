import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-navigation',
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.css']
})
export class PublicNavigationComponent implements OnInit {

  isSidenavActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
