import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-navigation',
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.css']
})

export class PublicNavigationComponent implements OnInit {

  innerWidth: any;
  isSidenavActive: boolean = false;
  isSmallerScreen: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  IsSmallerScreen() {
    if (this.innerWidth <= 768) {
      this.isSmallerScreen = true;
    }
    else {
      this.isSmallerScreen = false;
    }
  }

  // Uygulamanın açık olduğu sekmenin boyutu her değiştiğinde bize ekran genişliğini pixel olarak döndürür.
  @HostListener('window:resize', ['$event'])
  OnResize() {
    this.innerWidth = window.innerWidth;
    this.IsSmallerScreen();
  }

}
