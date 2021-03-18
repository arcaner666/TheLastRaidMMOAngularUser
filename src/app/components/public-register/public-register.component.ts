import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Player } from 'src/app/models/Player';
import { Result } from 'src/app/models/Result';

@Component({
  selector: 'app-public-register',
  templateUrl: './public-register.component.html',
  styleUrls: ['./public-register.component.css']
})
export class PublicRegisterComponent implements OnInit, OnDestroy {

  player: Player = new Player();

  checkNameResult: Result = new Result();
  registerResult: Result = new Result();

  passwordAgain: string = "";
  emailAgain: string = "";

  sub1: Subscription;
  sub2: Subscription;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  Register(player: Player) {
    this.registerResult = new Result();
    this.checkNameResult = new Result();
    this.sub1 = this.auth.CheckUserNameAvailability(player.UserName).subscribe((a: Result) => {
      if (!a.isDone) {
        this.checkNameResult.isDone = a.isDone;
        this.checkNameResult.info = a.info;
      }
      else {
        var date: Date = new Date();
        this.player.ConfirmationCode = this.auth.GenerateToken(6);
        this.player.ConfirmationDate = date.getTime().toString();
        this.sub2 = this.auth.Register(player).subscribe((b: Result) => {
          console.log(b);
          this.player = new Player();
          this.passwordAgain = "";
          this.emailAgain = "";
          this.registerResult.isDone = b.isDone;
          this.registerResult.info = b.info;
          //document.getElementById("openRegistrationModal").click();
        }, error => {
          this.registerResult.isDone = false;
          this.registerResult.info = "Registration failed!" + error;
          //document.getElementById("openRegistrationModal").click();
        });
      }
    });
  }

  Reset() {
    this.checkNameResult = new Result();
  }
}
