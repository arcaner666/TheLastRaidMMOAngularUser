import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-navigation',
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.css']
})

export class PublicNavigationComponent implements OnInit {

  public innerWidth: any;
  isSidenavActive: boolean = false;
  onMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  OnMobile() {
    if (this.innerWidth <= 730) {
      this.onMobile = true;
    }
    else {
      this.onMobile = false;
    }
  }

  // Uygulamanın açık olduğu sekmenin boyutu her değiştiğinde bize ekran genişliğini pixel olarak döndürür.
  @HostListener('window:resize', ['$event'])
  OnResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.OnMobile();
  }

}
