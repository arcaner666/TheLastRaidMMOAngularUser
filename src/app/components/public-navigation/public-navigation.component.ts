import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-public-navigation',
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.css']
})

export class PublicNavigationComponent implements OnInit {

  innerWidth: any;
  isSidenavActive: boolean = false;
  isSmallerScreen: boolean = false;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  CheckScreen() {
    if (this.innerWidth <= 768) {
      this.isSmallerScreen = true;
    }
    else {
      this.isSmallerScreen = false;
    }
  }

  // Uygulamanın açık olduğu sekmenin boyutu her değiştiğinde bize ekran genişliğini pixel olarak döndürür.
  @HostListener('window:resize')
  OnResize() {
    this.innerWidth = window.innerWidth;
    this.CheckScreen();
  }

}
