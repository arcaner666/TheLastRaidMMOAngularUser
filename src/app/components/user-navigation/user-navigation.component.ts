import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { SessionRecord } from './../../models/SessionRecord';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit, OnDestroy {

  isSidenavActive: boolean = false;
  isSmallerScreen: boolean = false;

  sessionRecord: SessionRecord = new SessionRecord();

  innerWidth: any;
  sub1: any;
  sub2: any;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  CheckScreen() {
    if (this.innerWidth <= 768) {
      this.isSmallerScreen = true;
    }
    else {
      this.isSmallerScreen = false;
    }
  }

  Logout() {
    this.sub1 = this.auth.GetSessionRecord(parseInt(localStorage.getItem("sessionId")!)).subscribe((sr: any) => {
      console.log(sr);
      var date: Date = new Date();
      this.sessionRecord = sr;
      this.sessionRecord.LogoutTime = date.getTime().toString();
      this.sub2 = this.auth.UpdateSessionRecord(this.sessionRecord).subscribe(a => {
        console.log(a);
        localStorage.removeItem("sessionId");
        localStorage.removeItem("token");
        this.auth.isLoggedIn = false;
        this.router.navigate(['login']);
      });
    });
  }

  /*
  // Tarayıcı sekmesi kapanırken sunucudan gelen cevabı beklemiyor bu sebeple bu çözüm işe yaramıyor.
  @HostListener('window:beforeunload')
  do() {
    this.Logout();
  }
  */

  // Uygulamanın açık olduğu sekmenin boyutu her değiştiğinde bize ekran genişliğini pixel olarak döndürür.
  @HostListener('window:resize')
  OnResize() {
    this.innerWidth = window.innerWidth;
    this.CheckScreen();
  }

}
