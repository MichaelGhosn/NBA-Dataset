import { Injectable } from '@angular/core';
import {CommonService} from '../../../Services/common.service';
import {IAllPlayersQueryParam} from '../Models/IAllPlayersQueryParam';
import {Observable} from 'rxjs';
import {IAllPlayersResponse} from '../../../Models/IAllPlayersResponse';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class PlayersDataRetrieveService {

  allPlayersQueryParams: IAllPlayersQueryParam = {
    page: 0,
    per_page: 4,
    search: ''
  };


  allPlayersparams = {
    params: new HttpParams()
      .set('page', String(this.allPlayersQueryParams.page))
      .set('per_page', String(this.allPlayersQueryParams.per_page))
      .set('search', String(this.allPlayersQueryParams.search))
  };

  constructor(private http: HttpClient,
              private commonService: CommonService) { }


  GetAllPlayers(): Observable<IAllPlayersResponse> {
    return this.http.get<IAllPlayersResponse>(this.commonService.backendApi + 'players', {
        headers: this.commonService.httpOptions.headers,
        params: this.allPlayersparams.params
      }
    );

  }

}
