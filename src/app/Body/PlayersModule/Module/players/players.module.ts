import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PlayersSkeletonComponent} from '../../Components/players-skeleton/players-skeleton.component';
import {PlayersDataRetrieveService} from '../../Services/players-data-retrieve.service';
import {PlayerCardComponent} from '../../Components/player-card/player-card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    PlayersSkeletonComponent,
    PlayerCardComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: PlayersSkeletonComponent
      }
    ]),
    MatCardModule
  ],
  providers: [PlayersDataRetrieveService]
})
export class PlayersModule { }
