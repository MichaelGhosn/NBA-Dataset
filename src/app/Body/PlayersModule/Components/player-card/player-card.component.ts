import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IPlayerModel} from '../../../../Models/IPlayerModel';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCardComponent implements OnInit, OnChanges {

  @Input() infos: any;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(this.infos).forEach(key => {
      if (!this.infos[key]) {
        this.infos[key] = '-';
      }
    });
  }

  GetKeys = (obj: IPlayerModel): Array<string> => {
    return Object.keys(obj);
  }

  GetTypeOfItem = (item: any): string => {
    return typeof item;
  }

}

