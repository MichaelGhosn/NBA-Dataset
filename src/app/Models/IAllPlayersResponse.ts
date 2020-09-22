import {IPlayerModel} from './IPlayerModel';
import {IMetaDataModel} from './IMetaDataModel';

export interface IAllPlayersResponse {
  data: Array<IPlayerModel>;
  meta: IMetaDataModel;
}



