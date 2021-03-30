import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public readonly apiUrl = "https://localhost:44336/api/";

  constructor(
    public http: HttpClient
  ) { }

  SetPlayerLocation(playerId: number) {
    return this.http.get(this.apiUrl + "setplayerlocation/" + playerId);
  }
}
