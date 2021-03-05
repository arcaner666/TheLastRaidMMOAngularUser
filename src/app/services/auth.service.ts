import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from './../models/Players';
import { SessionRecords } from './../models/SessionRecords';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = "https://localhost:44327/api/";
  public isLoggedIn: boolean = this.AuthControl();

  constructor(
    public http: HttpClient
  ) { }

  CheckAPI() {
    return this.http.get(this.apiUrl + "checkapi");
  }

  AuthControl() {
    var token = localStorage.getItem("token");
    if (token) {
      this.isLoggedIn = true;
      return true;
    }
    else {
      console.log("Token does not exist!");
      this.isLoggedIn = false;
      return false;
    }
  }

  Login(player: Players) {
    return this.http.post(this.apiUrl + "login", player);
  }

  AddSessionRecord(sessionRecord: SessionRecords) {
    return this.http.post(this.apiUrl + "addsessionrecord", sessionRecord);
  }

  UpdateSessionRecord(sessionRecord: SessionRecords) {
    return this.http.put(this.apiUrl + "updatesessionrecord/" + sessionRecord.ID, sessionRecord);
  }

  GetSessionRecord(sessionId: number) {
    return this.http.get(this.apiUrl + "getsessionrecord/" + sessionId);
  }

  CheckUserNameAvailability(username: string) {
    return this.http.get(this.apiUrl + "checkusername/" + username);
  }

  Register(player: Players) {
    return this.http.post(this.apiUrl + "register", player);
  }

  GenerateToken(s: number) {
    var chars: string = "1234567890qwertyuiopasdfghjklzxcvbnm";
    var token: string = "";
    for (let i = 0; i < s; i++) {
      var r = Math.floor(Math.random() * chars.length);
      token += chars.charAt(r);
    }
    return token;
  }
}
