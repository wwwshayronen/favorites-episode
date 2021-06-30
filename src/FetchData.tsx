import React, {useEffect, useContext} from 'react'
import { Store } from "./Store";

export default function FetchData() {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
     state.episodes.length === 0 && fetchDataAction()
    })
  
    const fetchDataAction = async () => {
      const URL =
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
      const data = await fetch(URL);
      const dataJSON = await data.json()
  
      return dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes,
      });
    };

    return (
        <>
        </>
    )
}
