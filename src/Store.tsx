import React, { useReducer } from "react";
import {IState, IAction, IEpisode} from "./interfaces"

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState | any>(initialState);

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "DELETE_FAV":
      const deleteFav = state.favorites.filter((favEpisode: IEpisode) => {
       return favEpisode !== action.payload 
      }) 
      return {...state, favorites: [...deleteFav]}  
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
