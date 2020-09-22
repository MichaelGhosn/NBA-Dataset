import {ITeamModel} from './ITeamModel';

export interface IPlayerModel{
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: string;
  height_inches: string;
  weight_pounds: number;
  team: ITeamModel;
}
