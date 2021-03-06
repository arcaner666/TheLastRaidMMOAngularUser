import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-navigation',
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.css']
})

export class PublicNavigationComponent implements OnInit {

  innerWidth: any;
  isSidenavActive: boolean = false;
  onMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  OnMobile() {
    if (this.innerWidth <= 768) {
      this.onMobile = true;
    }
    else {
      this.onMobile = false;
    }
  }

  // Uygulamanın açık olduğu sekmenin boyutu her değiştiğinde bize ekran genişliğini pixel olarak döndürür.
  @HostListener('window:resize', ['$event'])
  OnResize() {
    this.innerWidth = window.innerWidth;
    this.OnMobile();
  }

}
