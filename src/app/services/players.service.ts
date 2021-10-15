import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlayers } from '../models/IPlayers';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<IPlayers[]>("http://localhost:3000/rosa");
  }
}
