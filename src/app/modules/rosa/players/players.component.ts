import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayers } from 'src/app/models/IPlayers';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'sscn-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  apiPlayers: Observable<IPlayers[]>;

  constructor(private playerService: PlayersService) { 
    this.apiPlayers = this.playerService.getPlayers();
  }

  ngOnInit(): void {
  }

}
