import React from 'react'
import { IEpisode } from "./interfaces";

export default function FavPage(props: IEpisode | any): JSX.Element {
  const { handleAddFavOnClick, state } = props;

  return state.favorites.map((episode: IEpisode) => {
    return (
 
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={episode.name}
          style={{ border: " 2px solid white", borderRadius: "10px" }}
        />
        <section>
          {episode.name}
          <div>
            {" "}
            Season: {episode.season} Number: {episode.number}
          </div>
        </section>
        <button
          type="button"
          className="btn"
          onClick={() => handleAddFavOnClick(episode)}
        >
          {state.favorites.find(
            (favEpisode: IEpisode) => favEpisode.id === episode.id
          )
            ? "REMOVE FAV"
            : "FAV"}
        </button>
      </section>
    );
  });
}
