import { SessionRecord } from '../models/SessionRecord';
import { Player } from 'src/app/models/Player';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly apiUrl = "https://localhost:44336/api/";
  public isLoggedIn: boolean = this.AuthControl();

  constructor(
    public http: HttpClient
  ) { }

  AuthControl() {
    var token = localStorage.getItem("token");
    if (token) {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    else {
      console.log("Token does not exist!");
      this.isLoggedIn = false;
      return this.isLoggedIn;
    }
  }

  Login(player: Player) {
    return this.http.post(this.apiUrl + "login", player);
  }

  AddSessionRecord(sessionRecord: SessionRecord) {
    return this.http.post(this.apiUrl + "addsessionrecord", sessionRecord);
  }

  UpdateSessionRecord(sessionRecord: SessionRecord) {
    return this.http.put(this.apiUrl + "updatesessionrecord/" + sessionRecord.SessionRecordId, sessionRecord);
  }

  GetSessionRecord(sessionId: number) {
    return this.http.get(this.apiUrl + "getsessionrecord/" + sessionId);
  }

  CheckUserNameAvailability(username: string) {
    return this.http.get(this.apiUrl + "checkusername/" + username);
  }

  Register(player: Player) {
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
