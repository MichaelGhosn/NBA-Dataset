import { Component, OnInit } from '@angular/core';
import {PlayersDataRetrieveService} from '../../Services/players-data-retrieve.service';
import {IAllPlayersResponse} from '../../../../Models/IAllPlayersResponse';

@Component({
  selector: 'app-players-skeleton',
  templateUrl: './players-skeleton.component.html',
  styleUrls: ['./players-skeleton.component.scss']
})
export class PlayersSkeletonComponent implements OnInit {

  players: IAllPlayersResponse = null;

  constructor(private playersDataService: PlayersDataRetrieveService) {
    this.playersDataService.GetAllPlayers().subscribe((resp: IAllPlayersResponse) => {
      this.players = resp;
    });
  }

  ngOnInit(): void {}

}
