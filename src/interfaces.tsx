export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<any>;
}

export interface IAction {
  type: string;
  payload: any;
}